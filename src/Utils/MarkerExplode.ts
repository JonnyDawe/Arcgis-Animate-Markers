import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import {
    AnimationEasingConfig,
    IAnimatedGraphic,
    onSymbolAnimationStep,
    SymbolAnimationManager
} from "arcgis-animate-markers-plugin";
import confetti from "canvas-confetti";

import bomb from "../assets/bomb_1f4a3.png";
import explode from "../assets/explode_1f4a5.png";
import { throttleAsync } from "./throttle";

/** Example - Custom Animation using CIM Symbols to generate a timer and
 *  explosion effect on a clicked point.
 */
export class MarkerExplosionAnimation {
    private mapView: __esri.MapView;
    private layerView: FeatureLayerView;

    private easingConfig: AnimationEasingConfig;
    private symbolAnimationManager: SymbolAnimationManager;

    private clickHandler: IHandle;
    private hoverHandler: IHandle;

    private confetti: confetti.CreateTypes;

    constructor({
        symbolAnimationManager,
        mapView,
        layerView,

        easingConfig = {
            type: "easing",
            options: {
                easingFunction: "linear",
                duration: 3000
            }
        }
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        mapView: __esri.MapView;
        layerView: FeatureLayerView;

        easingConfig?: AnimationEasingConfig;
    }) {
        this.mapView = mapView;
        this.layerView = layerView;
        this.easingConfig = easingConfig;
        this.symbolAnimationManager = symbolAnimationManager;

        const confettiCanvas = document.createElement("canvas");
        confettiCanvas.classList.add("confetti-canvas");
        mapView.ui.add(confettiCanvas, "manual");

        this.confetti = confetti.create(confettiCanvas, {
            resize: true,
            useWorker: true
        });

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
     * Change the cursor to a pointer.
     *
     * Performs a hit test on the mapView object as the user moves their mouse.
     * The function is decorated with the throttle helper function which limits
     * the rate at which the function can be executed.
     *
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

    /**
     * Listen for clicks on the feature layer graphics.
     */
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

            const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
                graphic: firstLayerGraphic,
                easingConfig: this.easingConfig
            });
            this.animatePointPopEffect(newAnimatedGraphic);
        }
    };

    private animatePointPopEffect(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            onStep: this.onAnimationStep,
            onFinish: () => {
                const screenPoint = this.mapView.toScreen(animatedGraphic.geometry as __esri.Point);
                this.confetti({
                    particleCount: 140,
                    spread: 360,
                    scalar: 1.4,
                    gravity: 0.8,
                    startVelocity: 20,
                    origin: {
                        x: screenPoint.x / this.mapView.width,
                        y: screenPoint.y / this.mapView.height
                    }
                });
                animatedGraphic.symbol = new CIMSymbol({
                    data: {
                        type: "CIMSymbolReference",
                        symbol: {
                            type: "CIMPointSymbol",
                            symbolLayers: [
                                {
                                    type: "CIMPictureMarker",
                                    enable: true,
                                    anchorPoint: {
                                        x: 0,
                                        y: 0
                                    },
                                    size: 40,
                                    scaleX: 1,
                                    tintColor: [255, 255, 255, 255],
                                    url: explode
                                }
                            ]
                        }
                    }
                });
            }
        });
    }

    private onAnimationStep: onSymbolAnimationStep<__esri.CIMSymbol> = (
        progress: number,
        fromSymbol: __esri.CIMSymbol,
        to
    ): __esri.CIMSymbol => {
        return generateExplosionTimerSymbol(progress);
    };

    destroy() {
        this.clickHandler.remove();
        this.hoverHandler.remove();
    }
}

function generateProgressVectorMarker(progress: number): __esri.CIMVectorMarker[] {
    return [
        {
            type: "CIMVectorMarker",
            enable: true,

            offsetX: 17.5 * (progress - 1),
            size: 35,
            anchorPoint: {
                x: 0,
                y: 0
            },
            frame: { xmin: -100, ymin: 0, xmax: 100, ymax: 100 },
            markerGraphics: [
                //*************** CAPACITY BAR **************/
                // TWO BOXES
                {
                    type: "CIMMarkerGraphic",
                    primitiveName: "",
                    textString: "",
                    geometry: {
                        rings: [
                            [
                                [-50 * progress, -20],
                                [-50 * progress, -5],
                                [50 * progress, -5],
                                [50 * progress, -20]
                            ]
                        ]
                    },
                    symbol: {
                        type: "CIMPolygonSymbol",
                        symbolLayers: [
                            {
                                type: "CIMSolidFill",
                                enable: true,
                                color: [113, 200, 55, 255]
                            }
                        ]
                    }
                }
            ]
        },
        {
            type: "CIMVectorMarker",
            enable: true,
            offsetX: 17.5 * progress,
            size: 35,
            anchorPoint: {
                x: 0,
                y: 0
            },
            frame: { xmin: -100, ymin: 0, xmax: 100, ymax: 100 },
            markerGraphics: [
                //*************** CAPACITY BAR **************/
                // TWO BOXES
                {
                    type: "CIMMarkerGraphic",
                    primitiveName: "",
                    textString: "",
                    geometry: {
                        rings: [
                            [
                                [-50 * (1 - progress), -20],
                                [-50 * (1 - progress), -5],
                                [50 * (1 - progress), -5],
                                [50 * (1 - progress), -20]
                            ]
                        ]
                    },
                    symbol: {
                        type: "CIMPolygonSymbol",
                        symbolLayers: [
                            {
                                type: "CIMSolidFill",
                                enable: true,
                                color: [255, 0, 0, 255]
                            }
                        ]
                    }
                }
            ]
        }
    ];
}
export function generateExplosionTimerSymbol(progress: number): __esri.CIMSymbol {
    return new CIMSymbol({
        data: {
            type: "CIMSymbolReference",
            symbol: {
                type: "CIMPointSymbol",
                symbolLayers: [
                    ...(progress > 0 ? generateProgressVectorMarker(progress) : []),
                    {
                        type: "CIMPictureMarker",
                        enable: true,
                        anchorPoint: {
                            x: 0,
                            y: 0
                        },
                        offsetX: 3,
                        offsetY: 3,
                        size: 40,
                        scaleX: 1,
                        tintColor: [255, 255, 255, 255],
                        url: bomb
                    }
                ]
            }
        }
    });
}
