import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import { config as springConfig } from "@react-spring/web";

import {
    AnimatableLayerView,
    AnimationEasingConfig,
    IAnimatedGraphic,
    SymbolAnimationManager
} from "./AnimationManager";
import { throttleAsync } from "./throttle";

export class MarkerHoverPopAnimation {
    private mapView: __esri.MapView;
    private layerView: AnimatableLayerView;
    private scaleFactor: number;
    private easingConfig: AnimationEasingConfig;
    private symbolAnimationManager: SymbolAnimationManager;
    private hoverHandler: IHandle;

    constructor({
        symbolAnimationManager,
        mapView,
        layerView,
        scaleFactor,
        easingConfig = { type: "spring", options: springConfig.molasses }
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        mapView: __esri.MapView;
        layerView: AnimatableLayerView;
        scaleFactor: number;
        easingConfig: AnimationEasingConfig;
    }) {
        this.mapView = mapView;
        this.layerView = layerView;
        this.scaleFactor = scaleFactor;
        this.easingConfig = easingConfig;
        this.symbolAnimationManager = symbolAnimationManager;

        this.hoverHandler = reactiveUtils.on(
            () => this.mapView,
            "pointer-move",
            (event) => {
                const opts = {
                    include: [this.layerView.layer]
                };

                this.hitTest(event, opts);
            }
        );
    }

    /**
     * performs a hit test on the mapView object. The function is decorated with the throttle
     * function which limits the rate at which the function can be executed.
     */
    private hitTest = throttleAsync(
        async (
            event: __esri.MapViewScreenPoint | MouseEvent,
            options: { include: __esri.HitTestItem[] }
        ) => {
            const { results } = await this.mapView.hitTest(event, options);
            const hitGraphics = results.filter(
                (result) => (result.type = "graphic")
            ) as __esri.GraphicHit[];

            if (hitGraphics.length) {
                const firstLayerGraphic: __esri.Graphic = hitGraphics[0].graphic;
                this.mapView.container.style.cursor = "pointer";

                // The hit test result does not include a symbol so quickly regenerate it here.
                firstLayerGraphic.symbol = await symbolUtils.getDisplayedSymbol(firstLayerGraphic);
                this.activeGraphic = firstLayerGraphic;
            } else {
                this.mapView.container.style.cursor = "default";
                this.activeGraphic = null;
            }
        },
        70
    );

    private _activeGraphic: __esri.Graphic | null = null;
    // need to add a list of animating points...
    public set activeGraphic(hitGraphic: __esri.Graphic | null) {
        if (hitGraphic !== null && this.symbolAnimationManager.hasAnimatedGraphic(hitGraphic)) {
            return;
        }

        if (hitGraphic === null && this._activeGraphic === null) {
            return;
        } else {
            this._activeGraphic = hitGraphic;
        }

        this.symbolAnimationManager
            .getAllAnimatedGraphics()
            .forEach((animatedGraphic) => this.cancelAnimation(animatedGraphic));

        if (this._activeGraphic === null) {
            return;
        }

        const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
            graphic: this._activeGraphic,
            easingConfig: this.easingConfig
        });
        this.animatePointPopEffect(newAnimatedGraphic);
    }

    private animatePointPopEffect(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            to: { scale: this.scaleFactor, rotate: 10 }
        });
    }

    private cancelAnimation(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            to: { scale: 1, rotate: 0 },
            onFinish: () => {
                this.symbolAnimationManager.removeAnimatedGraphic(animatedGraphic);
            }
        });
    }

    destroy() {
        this.hoverHandler.remove();
    }
}
