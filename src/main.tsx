import "./styles/index.css";

import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import { SymbolAnimationManager } from "./Utils/AnimationManager";
import { MarkerClickPopAnimation } from "./Utils/MarkerClickPop";
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

const featureLayer = new FeatureLayer({
    portalItem: { id: "ae3681977a0749e98867e42728196b3a" },
    popupEnabled: false
});

map.add(featureLayer);

mapView.whenLayerView(featureLayer).then(async (layerView) => {
    const symbolAnimationManager = new SymbolAnimationManager({
        mapView,
        layerView
    });

    const MarkerPopEffectManager = new MarkerClickPopAnimation({
        symbolAnimationManager,
        mapView,
        layerView,
        scaleFactor: 1.5
    });

    const result = await featureLayer.queryFeatures({
        where: "1=1",
        returnGeometry: true
    });

    new MarkerRadarPingAnimation({
        symbolAnimationManager,
        graphics: result.features
    });
});
