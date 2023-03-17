import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";

/** Example - A simple radar ping animation appearing as an overlay for the
 *  the map point.
 *
 * This utilises a standard easing function and adds a new graphic as an overlay
 * onto the map.
 */
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
                    color: [255, 0, 0, 0.8],
                    style: "solid",
                    width: 4
                }
            });

            const id = Date.now().toString();
            const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
                animationId: id,
                graphic: graphicToAdd,
                easingConfig: {
                    type: "easing",
                    options: {
                        easingFunction: "easeInOutCubic",
                        duration: 1500
                    }
                },
                isOverlay: true
            });
            newAnimatedGraphic.symbolAnimation.start({
                to: { scale: 1.7 },
                onFinish: () => {
                    this.symbolAnimationManager.removeAnimatedGraphic({
                        graphic: newAnimatedGraphic
                    });
                }
            });
        }, 2000);
    }

    destroy() {
        window.clearInterval(this.intervalId);
    }
}
