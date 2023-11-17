import Graphic from "@arcgis/core/Graphic";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";

/** Example - A simple radar ping animation appearing as an overlay for the
 *  the map point.
 *
 * This utilises a standard easing function and adds a new graphic as an overlay
 * onto the map.
 */
export class MarkerOscillateAnimation {
    private symbolAnimationManager: SymbolAnimationManager;

    constructor({
        symbolAnimationManager,
        graphics
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        graphics: Graphic[];
    }) {
        this.symbolAnimationManager = symbolAnimationManager;
        this.pulseItems(graphics);
    }

    private forwardAnimation = (item: Graphic) => {
        const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
            graphic: item,
            easingConfig: {
                type: "spring",
                options: {
                    stiffness: 100,
                    damping: 200,
                    mass: 1
                }
            },
            opacity: 1,
            isOverlay: false
        });
        newAnimatedGraphic.symbolAnimation.start({
            to: { scale: 1.2, opacity: 0.5 },
            onFinish: () => {
                this.reverseAnimation(item);
            }
        });
    };

    private reverseAnimation = (item: Graphic) => {
        const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
            graphic: item,
            easingConfig: {
                type: "spring",
                options: {
                    stiffness: 100,
                    damping: 200,
                    mass: 1
                }
            },
            isOverlay: false
        });
        newAnimatedGraphic.symbolAnimation.start({
            to: { scale: 0.6, opacity: 1 },
            onFinish: () => {
                this.forwardAnimation(item);
            }
        });
    };

    private async pulseItems(arr: Graphic[]): Promise<void> {
        for (const item of arr) {
            // The hit test result does not include a symbol so quickly regenerate it here.
            item.symbol = await symbolUtils.getDisplayedSymbol(item);
            window.setTimeout(() => {
                this.forwardAnimation(item);
            }, 1000 * Math.random());
        }
    }

    destroy() {
        return;
    }
}
