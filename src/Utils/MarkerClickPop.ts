import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import { config as springConfig } from "@react-spring/web";
import { Howl } from "howler";

import bugle from "../assets/bugle.wav";
import meow from "../assets/cat.wav";
import drums from "../assets/drums.mp3";
import guitar from "../assets/guitar.wav";
import trumpet from "../assets/trumpet.wav";
import {
    AnimatableLayerView,
    AnimationEasingConfig,
    IAnimatedGraphic,
    SymbolAnimationManager
} from "./AnimationManager";
import { throttleAsync } from "./throttle";

export class MarkerClickPopAnimation {
    private mapView: __esri.MapView;
    private layerView: AnimatableLayerView;
    private scaleFactor: number;
    private easingConfig: AnimationEasingConfig;
    private symbolAnimationManager: SymbolAnimationManager;

    private clickHandler: IHandle;
    private hoverHandler: IHandle;

    private meowSound: Howl = new Howl({
        src: meow
    });
    private trumpetSound: Howl = new Howl({
        src: trumpet
    });

    private hornSound: Howl = new Howl({
        src: bugle
    });

    private guitarSound: Howl = new Howl({
        src: guitar
    });
    private drumSounds: Howl = new Howl({
        src: drums,
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200]
        }
    });

    constructor({
        symbolAnimationManager,
        mapView,
        layerView,
        scaleFactor,
        easingConfig = {
            type: "spring",
            options: {
                tension: 280,
                friction: 40,
                mass: 10
            }
        }
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        mapView: __esri.MapView;
        layerView: AnimatableLayerView;
        scaleFactor: number;
        easingConfig?: AnimationEasingConfig;
    }) {
        this.mapView = mapView;
        this.layerView = layerView;
        this.scaleFactor = scaleFactor;
        this.easingConfig = easingConfig;
        this.symbolAnimationManager = symbolAnimationManager;

        this.clickHandler = reactiveUtils.on(
            () => this.mapView,
            "click",
            (event) => {
                const opts = {
                    include: [this.layerView.layer]
                };

                this.clickHitTest(event, opts);
            }
        );

        this.hoverHandler = reactiveUtils.on(
            () => this.mapView,
            "pointer-move",
            (event) => {
                const opts = {
                    include: [this.layerView.layer]
                };

                this.hoverHitTest(event, opts);
            }
        );
    }

    /**
     * performs a hit test on the mapView object. The function is decorated with the throttle
     * function which limits the rate at which the function can be executed.
     */
    private hoverHitTest = throttleAsync(
        async (
            event: __esri.MapViewScreenPoint | MouseEvent,
            options: { include: __esri.HitTestItem[] }
        ) => {
            const { results } = await this.mapView.hitTest(event, options);
            const hitGraphics = results.filter(
                (result) => (result.type = "graphic")
            ) as __esri.GraphicHit[];

            if (hitGraphics.length) {
                this.mapView.container.style.cursor = "pointer";
            } else {
                this.mapView.container.style.cursor = "default";
            }
        },
        70
    );

    private clickHitTest = async (
        event: __esri.MapViewScreenPoint | MouseEvent,
        options: { include: __esri.HitTestItem[] }
    ) => {
        const { results } = await this.mapView.hitTest(event, options);
        const hitGraphics = results.filter(
            (result) => (result.type = "graphic")
        ) as __esri.GraphicHit[];

        if (hitGraphics.length) {
            const firstLayerGraphic: __esri.Graphic = hitGraphics[0].graphic;

            // The hit test result does not include a symbol so quickly regenerate it here.
            firstLayerGraphic.symbol = await symbolUtils.getDisplayedSymbol(firstLayerGraphic);
            this.activeGraphic = firstLayerGraphic;
        } else {
            this.activeGraphic = null;
        }
    };

    // need to add a list of animating points...
    public set activeGraphic(hitGraphic: __esri.Graphic | null) {
        if (hitGraphic) {
            const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
                graphic: hitGraphic,
                easingConfig: this.easingConfig
            });
            this.animatePointPopEffect(newAnimatedGraphic);
        }
    }

    private animatePointPopEffect(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            type: "symbol-scale",
            to: this.scaleFactor,
            onStart: () => {
                const cancelAnimationOnEnd = () => this.cancelAnimation(animatedGraphic);

                switch (animatedGraphic.attributes["soundType"]) {
                    case "cat": {
                        this.playSound(this.meowSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "trumpet": {
                        this.playSound(this.trumpetSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "horn": {
                        this.playSound(this.hornSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "guitar": {
                        this.playSound(this.guitarSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "drum": {
                        if (Math.random() > 0.5) {
                            this.playSound(this.drumSounds, cancelAnimationOnEnd, "snare");
                        } else {
                            this.playSound(this.drumSounds, cancelAnimationOnEnd, "hihat");
                        }

                        break;
                    }
                }
            }
        });
    }

    private cancelAnimation(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            type: "symbol-scale",
            to: 1,
            onFinish: () => {
                this.symbolAnimationManager.removeAnimatedGraphic(animatedGraphic);
            }
        });
    }

    private playSound(sound: Howl, onEnd: () => void, id?: string) {
        sound.off();
        const playingId = sound.play(id);
        sound.on(
            "end",
            () => {
                if (sound.playing(playingId) === false) {
                    onEnd();
                }
            },
            playingId
        );
    }

    destroy() {
        this.clickHandler.remove();
        this.hoverHandler.remove();
    }
}
