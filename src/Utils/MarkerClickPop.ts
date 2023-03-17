import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import {
    AnimationEasingConfig,
    IAnimatableSymbolProps,
    IAnimatedGraphic,
    SymbolAnimationManager
} from "arcgis-animate-markers-plugin";
import { Howl } from "howler";

import bugle from "../assets/bugle.wav";
import meow from "../assets/cat.wav";
import drums from "../assets/drums.mp3";
import guitar from "../assets/guitar.wav";
import trumpet from "../assets/trumpet.wav";
import { throttleAsync } from "./throttle";

/** Example - Animate the symbol of a graphic when a user clicks on the point.
 *
 * This example uses Spring easing and demonstrates adding sounds to an animation.
 */
export class MarkerClickPopAnimation {
    private mapView: __esri.MapView;
    private layerView: FeatureLayerView;
    private to: IAnimatableSymbolProps;
    private easingConfig: AnimationEasingConfig;
    private symbolAnimationManager: SymbolAnimationManager;

    private clickHandler: IHandle;
    private hoverHandler: IHandle;

    private sounds = {
        meowSound: new Howl({
            src: meow
        }),
        trumpetSound: new Howl({
            src: trumpet
        }),
        hornSound: new Howl({
            src: bugle
        }),
        guitarSound: new Howl({
            src: guitar
        }),
        drumSounds: new Howl({
            src: drums,
            sprite: {
                kick: [0, 350],
                hihat: [374, 160],
                snare: [666, 290],
                cowbell: [968, 200]
            }
        })
    };

    constructor({
        symbolAnimationManager,
        mapView,
        layerView,
        to,
        easingConfig
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        mapView: __esri.MapView;
        layerView: FeatureLayerView;
        to: IAnimatableSymbolProps;
        easingConfig: AnimationEasingConfig;
    }) {
        this.mapView = mapView;
        this.layerView = layerView;
        this.to = to;
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
            to: this.to,
            onStart: () => {
                const cancelAnimationOnEnd = () => this.cancelAnimation(animatedGraphic);

                switch (animatedGraphic.attributes["soundType"]) {
                    case "cat": {
                        this.playSound(this.sounds.meowSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "trumpet": {
                        this.playSound(this.sounds.trumpetSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "horn": {
                        this.playSound(this.sounds.hornSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "guitar": {
                        this.playSound(this.sounds.guitarSound, cancelAnimationOnEnd);
                        break;
                    }
                    case "drum": {
                        if (Math.random() > 0.5) {
                            this.playSound(this.sounds.drumSounds, cancelAnimationOnEnd, "snare");
                        } else {
                            this.playSound(this.sounds.drumSounds, cancelAnimationOnEnd, "hihat");
                        }

                        break;
                    }
                    default: {
                        cancelAnimationOnEnd();
                    }
                }
            }
        });
    }

    private cancelAnimation(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            to: { scale: 1, rotate: 0 },
            onFinish: () => {
                this.symbolAnimationManager.removeAnimatedGraphic({ graphic: animatedGraphic });
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
