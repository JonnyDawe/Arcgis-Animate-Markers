import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Map from "@arcgis/core/Map";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import MapView from "@arcgis/core/views/MapView";
import { config as springConfig } from "@react-spring/web";
import { SymbolAnimationManager } from "arcgis-animate-markers-plugin";

import { MarkerClickPopAnimation } from "./Utils/MarkerClickPop";
import { generatePartyPopSymbol, MarkerExplosionAnimation } from "./Utils/MarkerConfettiPop";
import { MarkerHoverPopAnimation } from "./Utils/MarkerHoverPop";
import { MarkerOscillateAnimation } from "./Utils/MarkerOscillate";
import { MarkerRadarPingAnimation } from "./Utils/MarkerRadarPing";

const map = new Map({
    basemap: new Basemap({ portalItem: { id: "a8c045aa74d643cc9e2fa2702cc4cb45" } })
});

const mapView = new MapView({
    container: "viewDiv",
    map: map,
    constraints: {
        minZoom: 10
    },
    center: [-2.362, 51.383],
    zoom: 15
});

const titleDiv = document.getElementById("titleDiv");
mapView.ui.add(titleDiv as HTMLElement, "top-right");
const modeSelect = document.getElementById("modeSelect") as HTMLSelectElement;
modeSelect.style.display = "block";
modeSelect.setAttribute("disabled", "");
modeSelect?.addEventListener("change", (ev) => {
    updateAnimationExample(ev as InputEvent);
});

const featureLayer = new FeatureLayer({
    portalItem: { id: "ae3681977a0749e98867e42728196b3a" },
    popupEnabled: false,
    outFields: ["*"]
});

map.add(featureLayer);

let currentMode:
    | MarkerClickPopAnimation
    | MarkerExplosionAnimation
    | MarkerHoverPopAnimation
    | MarkerRadarPingAnimation
    | MarkerOscillateAnimation;

let symbolAnimationManager: SymbolAnimationManager;
let featureLayerView: FeatureLayerView;
let originalRenderer: __esri.Renderer;
let allGraphics: __esri.FeatureSet;

mapView.whenLayerView(featureLayer).then(async (layerView) => {
    allGraphics = await featureLayer.queryFeatures({
        where: "1=1",
        returnGeometry: true,
        outFields: ["*"]
    });
    featureLayerView = layerView;
    symbolAnimationManager = new SymbolAnimationManager({
        mapView,
        layerView
    });
    originalRenderer = (featureLayer.renderer as SimpleRenderer).clone();
    featureLayer.renderer = new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
            color: [255, 255, 255, 1],
            size: 30,
            outline: {
                color: [255, 150, 0, 1],
                style: "solid",
                width: 4
            }
        })
    });
    currentMode = new MarkerOscillateAnimation({
        symbolAnimationManager,
        graphics: allGraphics.features
    });
    modeSelect.removeAttribute("disabled");
});

function updateAnimationExample(event: InputEvent) {
    if (event.target) {
        const select = event.target as HTMLSelectElement;
        const mode = select.options[select.selectedIndex].value;

        currentMode.destroy();
        symbolAnimationManager.removeAllAnimatedGraphics();
        switch (mode) {
            case "radar-ping": {
                featureLayer.renderer = originalRenderer;
                currentMode = new MarkerRadarPingAnimation({
                    symbolAnimationManager,
                    graphics: allGraphics.features
                });
                break;
            }
            case "hover-pop-effect": {
                featureLayer.renderer = originalRenderer;
                currentMode = new MarkerHoverPopAnimation({
                    symbolAnimationManager,
                    mapView,
                    layerView: featureLayerView,
                    to: { scale: 1.5, rotate: 10 },
                    easingConfig: { type: "spring", options: springConfig.molasses }
                });
                break;
            }
            case "click-pop-effect": {
                featureLayer.renderer = originalRenderer;
                currentMode = new MarkerClickPopAnimation({
                    symbolAnimationManager,
                    mapView,
                    layerView: featureLayerView,
                    to: { scale: 1.5, rotate: 20 },
                    easingConfig: {
                        type: "spring",
                        options: {
                            tension: 280,
                            friction: 40,
                            mass: 10
                        }
                    }
                });
                break;
            }
            case "oscillate": {
                featureLayer.renderer = new SimpleRenderer({
                    symbol: new SimpleMarkerSymbol({
                        color: [255, 255, 255, 1],
                        size: 30,
                        outline: {
                            color: [255, 150, 0, 1],
                            style: "solid",
                            width: 4
                        }
                    })
                });
                currentMode = new MarkerOscillateAnimation({
                    symbolAnimationManager,
                    graphics: allGraphics.features
                });
                break;
            }
            case "custom-animation": {
                featureLayer.renderer = new SimpleRenderer({
                    symbol: generatePartyPopSymbol(0)
                });

                currentMode = new MarkerExplosionAnimation({
                    symbolAnimationManager,
                    mapView,
                    layerView: featureLayerView
                });
                break;
            }
        }
    }
}
