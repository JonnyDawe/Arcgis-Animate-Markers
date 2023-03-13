import "./styles/index.css";

import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Map from "@arcgis/core/Map";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import MapView from "@arcgis/core/views/MapView";

import { SymbolAnimationManager } from "./Utils/AnimationManager";
import { MarkerClickPopAnimation } from "./Utils/MarkerClickPop";
import { generateExplosionTimerSymbol, MarkerExplosionAnimation } from "./Utils/MarkerExplode";
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

const featureLayer = new FeatureLayer({
    portalItem: { id: "ae3681977a0749e98867e42728196b3a" },
    popupEnabled: false,
    outFields: ["*"],
    renderer: new SimpleRenderer({
        symbol: generateExplosionTimerSymbol(0)
    })
});

map.add(featureLayer);

mapView.whenLayerView(featureLayer).then(async (layerView) => {
    const symbolAnimationManager = new SymbolAnimationManager({
        mapView,
        layerView
    });

    const MarkerPopEffectManager = new MarkerExplosionAnimation({
        symbolAnimationManager,
        mapView,
        layerView
    });

    const result = await featureLayer.queryFeatures({
        where: "1=1",
        returnGeometry: true
    });

    // new MarkerRadarPingAnimation({
    //     symbolAnimationManager,
    //     graphics: result.features
    // });
});
