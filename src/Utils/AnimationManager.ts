import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import FeatureEffect from "@arcgis/core/layers/support/FeatureEffect.js";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter.js";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import { AnimationProps, SpringValue } from "@react-spring/web";

export type AnimatableLayerView =
    | __esri.FeatureLayerView
    | __esri.GeoJSONLayerView
    | __esri.GraphicsLayerView;

export interface IAnimationProps {
    type: "symbol-scale";
    to: number;
    onStart?: () => void;
    onFinish?: () => void;
}

export type onSymbolAnimationStep = (
    progress: number,
    originalSymbol: __esri.Symbol,
    currentSymbol: __esri.Symbol,
    animationProps: IAnimationProps
) => __esri.Symbol;

export type AnimationEasingConfig = ISpringEasingConfig | IStandardEasingConfig;

export interface ISpringEasingConfig {
    type: "spring";
    options?: AnimationProps["config"];
}

export interface IStandardEasingConfig {
    type: "easing";
    options?: {
        duration: number;
    };
}

export interface IAnimatedGraphic extends Graphic {
    symbolAnimation: GraphicSymbolAnimation;
}

const isGraphicsLayerView = (
    layerView: AnimatableLayerView
): layerView is __esri.GraphicsLayerView => {
    return layerView.layer.type === "graphics";
};

const isCIMVectorMarkerLayer = (
    symbolLayer: __esri.CIMSymbolLayer
): symbolLayer is __esri.CIMVectorMarker => {
    return symbolLayer.type === "CIMVectorMarker";
};

const isCIMPictureMarkerLayer = (
    symbolLayer: __esri.CIMSymbolLayer
): symbolLayer is __esri.CIMPictureMarker => {
    return symbolLayer.type === "CIMPictureMarker";
};

export class SymbolAnimationManager {
    private mapView: __esri.MapView;

    /** The layerview that will be animated. 
     *  - If the layer is a **graphics layer**, then the symbols can be
        modified directly and overlay graphics can be added directly to the
        layer. 
        - If the layer is of **any other animatable type**, a new graphics layer
        must be added on top of the parent layer in order to animate symbols. 
        The symbols from the parent layer will be mostly hidden using a feature effect.
     */
    private parentLayerView: AnimatableLayerView;

    /**
     * The graphics layer into which animatedGraphics are added.
     */
    private animationGraphicsLayer: __esri.GraphicsLayer;

    /**
     * The current animated Graphics added to the animation layer
     */
    private animatedGraphics: Record<string, IAnimatedGraphic>;

    /**
     * The current graphic object ids that should be filtered out.
     * **Only applicable when the parent layerView is not a Graphics Layer**
     */
    private graphicsObjectIdsToFilter: Set<number> = new Set();

    constructor({
        layerView,
        mapView
    }: {
        layerView: AnimatableLayerView;
        mapView: __esri.MapView;
    }) {
        this.mapView = mapView;
        this.animatedGraphics = {};
        this.parentLayerView = layerView;
        this.animationGraphicsLayer = this.setupAnimatedGraphicsLayer(layerView);
    }

    private setupAnimatedGraphicsLayer(layerView: AnimatableLayerView): __esri.GraphicsLayer {
        if (isGraphicsLayerView(layerView)) {
            return layerView.layer as __esri.GraphicsLayer;
        } else {
            this.animationGraphicsLayer = new GraphicsLayer({
                effect: (layerView.layer as __esri.FeatureLayer).effect
            });

            this.mapView.map.add(
                this.animationGraphicsLayer,
                this.mapView.layerViews.findIndex((item) => {
                    return item === layerView;
                }) + 1
            );

            // **HACK**
            // create a feature effect filter that can be used to visibly hide features
            // from being displayed but still allows for interactions such as clicks to show
            // popups.
            layerView.featureEffect = new FeatureEffect({
                includedEffect: "opacity(0.001%)",
                filter: new FeatureFilter({ where: "1<>1" })
            });

            return this.animationGraphicsLayer;
        }
    }

    private addExcludedFeature(objectId: number) {
        this.graphicsObjectIdsToFilter.add(objectId);
        this.updateExcludedFeatures();
    }

    private removeExcludedFeature(objectId: number) {
        this.graphicsObjectIdsToFilter.delete(objectId);
        this.updateExcludedFeatures();
    }

    private updateExcludedFeatures(): void {
        (this.parentLayerView as FeatureLayerView).featureEffect.filter = new FeatureFilter({
            where: `${
                (this.parentLayerView as FeatureLayerView).layer.objectIdField
            } IN ( ${Array.from(this.graphicsObjectIdsToFilter).join(",")} ) `
        });
    }

    public hasAnimatedGraphic(graphic: __esri.Graphic) {
        const objectId = this.getGraphicId(graphic);
        return objectId !== undefined && this.animatedGraphics[objectId] !== undefined;
    }

    public getAnimatedGraphic(graphic: __esri.Graphic): IAnimatedGraphic | undefined {
        const objectId = this.getGraphicId(graphic);
        return this.animatedGraphics[objectId.toString()];
    }

    public getAllAnimatedGraphics(): IAnimatedGraphic[] {
        return Object.values(this.animatedGraphics) ?? [];
    }

    public makeAnimatableSymbol({
        graphic,
        easingConfig,
        isOverlay = false
    }: {
        graphic: __esri.Graphic;
        easingConfig: AnimationEasingConfig;
        isOverlay?: boolean;
    }): IAnimatedGraphic {
        const objectId = this.getGraphicId(graphic);

        if (this.hasAnimatedGraphic(graphic)) {
            return this.getAnimatedGraphic(graphic) as IAnimatedGraphic;
        }

        const newAnimatedGraphic = GraphicSymbolAnimation.createAnimatedGraphic({
            graphic,
            easingConfig
        });

        // add the graphic to the lookup using its object ID
        this.animatedGraphics[objectId.toString()] = newAnimatedGraphic;

        if (isGraphicsLayerView(this.parentLayerView)) {
            // directly manipulate the graphic.
        } else {
            // make a new animated graphic and add it to a new grapics layer.
            this.animationGraphicsLayer.add(newAnimatedGraphic);
            this.addExcludedFeature(objectId);
        }

        return newAnimatedGraphic;
    }

    public removeAnimatedGraphic(graphic: __esri.Graphic): void {
        // remove the graphic from the lookup using its object ID
        const objectId = this.getGraphicId(graphic);
        if (this.hasAnimatedGraphic(graphic)) {
            const animatedGraphic = this.getAnimatedGraphic(graphic) as IAnimatedGraphic;
            if (isGraphicsLayerView(this.parentLayerView)) {
                // reset the graphic symbol.
                animatedGraphic.symbolAnimation.resetSymbol();
            } else {
                this.removeExcludedFeature(objectId);
                window.setTimeout(() => {
                    // remove graphic from animation layer.
                    this.removeAnimatedGraphic(animatedGraphic);
                    this.animationGraphicsLayer.remove(animatedGraphic);
                }, 50);
            }
            delete this.animatedGraphics[objectId.toString()];
        }
    }

    private getGraphicId(graphic: __esri.Graphic) {
        return graphic.getObjectId() ?? (graphic as any).uid;
    }
}

class GraphicSymbolAnimation {
    public static createAnimatedGraphic({
        graphic,
        easingConfig
    }: {
        graphic: __esri.Graphic;
        easingConfig: AnimationEasingConfig;
    }): IAnimatedGraphic {
        (graphic as IAnimatedGraphic).symbolAnimation = new GraphicSymbolAnimation({
            graphic,
            easingConfig
        });
        return graphic as IAnimatedGraphic;
    }

    private easingConfig: AnimationEasingConfig;
    private graphic: Graphic;
    private originalSymbol: __esri.Symbol;

    constructor({
        graphic,
        easingConfig
    }: {
        graphic: __esri.Graphic;
        easingConfig: AnimationEasingConfig;
    }) {
        this.graphic = graphic;
        this.originalSymbol = (graphic.symbol as any).clone();
        this.easingConfig = easingConfig;
    }

    private animationStartTimeStamp = 0;
    private resetAnimationTimeStamp() {
        this.animationStartTimeStamp = 0;
    }

    public start(animationProps: IAnimationProps) {
        switch (animationProps.type) {
            case "symbol-scale":
                this.animateMarkerSize(animationProps);
        }
    }

    private animateMarkerSize(animationProps: IAnimationProps) {
        switch (this.originalSymbol.type) {
            case "simple-marker": {
                this.animateSymbol(animationProps, this.updateSimpleMarkerScale);
                break;
            }

            case "picture-marker": {
                this.animateSymbol(animationProps, this.updatePictureMarkerScale);
                break;
            }

            case "cim": {
                this.animateSymbol(animationProps, this.updateCIMSymbolPointMarkerScale);
                break;
            }
        }
    }

    private easeOutQuad = (t: number) => t * (2 - t);

    private updateSimpleMarkerScale: onSymbolAnimationStep = (
        progress: number,
        originalSymbol: __esri.Symbol,
        currentSymbol: __esri.Symbol,
        { to: targetScale }: { to: number }
    ): __esri.SimpleMarkerSymbol => {
        const { size: originalSize } = originalSymbol as __esri.SimpleMarkerSymbol;
        const { size: currentSize } = currentSymbol as __esri.SimpleMarkerSymbol;

        const sym = (currentSymbol as __esri.SimpleMarkerSymbol).clone();
        sym.size = currentSize + (originalSize * targetScale - currentSize) * progress;

        return sym;
    };

    private updatePictureMarkerScale: onSymbolAnimationStep = (
        progress: number,
        originalSymbol: __esri.Symbol,
        currentSymbol: __esri.Symbol,
        { to: targetScale }: { to: number }
    ): __esri.PictureMarkerSymbol => {
        const { height: originalHeight, width: originalWidth } =
            originalSymbol as __esri.PictureMarkerSymbol;
        const { height: currentHeight, width: currentWidth } =
            currentSymbol as __esri.PictureMarkerSymbol;

        const sym = (currentSymbol as __esri.PictureMarkerSymbol).clone();

        sym.width = currentWidth + (originalWidth * targetScale - currentWidth) * progress;
        sym.height = currentHeight + (originalHeight * targetScale - currentHeight) * progress;

        console.log(sym.width);
        console.log(sym.height);
        return sym;
    };

    private updateCIMSymbolPointMarkerScale: onSymbolAnimationStep = (
        progress: number,
        originalSymbol: __esri.Symbol,
        currentSymbol: __esri.Symbol,
        { to: targetScale }: { to: number }
    ): __esri.CIMSymbol => {
        const newSymbol = (currentSymbol as __esri.CIMSymbol).clone();

        for (const [index, symbolLayer] of newSymbol.data.symbol.symbolLayers.entries()) {
            if (isCIMVectorMarkerLayer(symbolLayer)) {
                const originalSymbolLayer = (originalSymbol as __esri.CIMSymbol).data.symbol
                    .symbolLayers[index] as __esri.CIMVectorMarker;
                symbolLayer.size =
                    symbolLayer.size +
                    (originalSymbolLayer.size * targetScale - symbolLayer.size) * progress;
            }
            if (isCIMPictureMarkerLayer(symbolLayer)) {
                const originalSymbolLayer = (originalSymbol as __esri.CIMSymbol).data.symbol
                    .symbolLayers[index] as __esri.CIMPictureMarker;
                symbolLayer.size =
                    symbolLayer.size +
                    (originalSymbolLayer.size * targetScale - symbolLayer.size) * progress;
            }
        }
        return newSymbol;
    };

    private abortCurrentAnimation: () => void = () => {
        return;
    };

    public animateSymbol(animationProps: IAnimationProps, onStep: onSymbolAnimationStep) {
        const currentSymbol = (this.graphic.symbol as any).clone();
        const easingType = this.easingConfig.type;
        const springEasing =
            easingType === "spring"
                ? new SpringValue(0, { to: 1, config: this.easingConfig.options })
                : null;

        this.abortCurrentAnimation?.();
        animationProps?.onStart?.();
        let abort = false;
        const step: FrameRequestCallback = (timestamp) => {
            if (this.animationStartTimeStamp === 0) {
                this.animationStartTimeStamp = timestamp;
            }
            const elapsed = timestamp - this.animationStartTimeStamp;

            if (abort) {
                this.resetAnimationTimeStamp();
                return;
            }

            if (
                (easingType === "easing" &&
                    elapsed < (this.easingConfig?.options?.duration ?? 0)) ||
                springEasing?.idle !== true
            ) {
                if (springEasing) {
                    springEasing.advance(elapsed);
                    console.log(springEasing?.get());
                }

                const animationProgress =
                    easingType === "spring"
                        ? springEasing?.get() ?? 0
                        : this.easeOutQuad(elapsed / (this.easingConfig.options?.duration ?? 0));

                this.graphic.symbol = onStep(
                    animationProgress,
                    this.originalSymbol,
                    currentSymbol,
                    animationProps
                );
                window.requestAnimationFrame(step);
            } else {
                this.resetAnimationTimeStamp();
                animationProps?.onFinish?.();
            }
        };

        window.requestAnimationFrame(step);
        this.abortCurrentAnimation = () => {
            abort = true;
        };
    }

    public resetSymbol() {
        this.graphic.symbol = this.originalSymbol;
    }
}
