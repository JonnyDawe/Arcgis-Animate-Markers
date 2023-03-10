import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";

import { SymbolAnimationManager } from "./AnimationManager";

export class MarkerRadarPingAnimation {
    private symbolAnimationManager: SymbolAnimationManager;

    private intervalId: number;

    constructor({
        symbolAnimationManager,
        graphics
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        graphics: Graphic[];
    }) {
        this.symbolAnimationManager = symbolAnimationManager;

        this.intervalId = this.animateRandomItem(graphics);
    }

    private animateRandomItem(arr: Graphic[]): number {
        return window.setInterval(() => {
            const randomIndex = Math.floor(Math.random() * arr.length);
            const randomItem = arr[randomIndex];

            const graphicToAdd = randomItem.clone();
            graphicToAdd.symbol = new SimpleMarkerSymbol({
                color: [255, 255, 255, 0],
                size: 30,
                outline: {
                    color: [255, 0, 0, 0.7],
                    style: "solid",
                    width: 5
                }
            });
            const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
                graphic: graphicToAdd,
                easingConfig: {
                    type: "easing",
                    options: {
                        easingFunction: "easeInOutCubic",
                        duration: 1000
                    }
                }
            });
            newAnimatedGraphic.symbolAnimation.start({
                type: "symbol-scale",
                to: 1.7,
                onFinish: () => {
                    this.symbolAnimationManager.removeAnimatedGraphic(newAnimatedGraphic);
                }
            });
        }, 3000);
    }

    destroy() {
        window.clearInterval(this.intervalId);
    }
}
