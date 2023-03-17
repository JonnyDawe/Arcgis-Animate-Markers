# arcgis-animate-markers-plugin examples repo

#### `Animate on Hover`

[This example](src/Utils/MarkerHoverPop.ts) demonstrates how to create an animation effect on a point marker when the mouse cursor is over it on the map. The animation employs Spring easing to achieve a satisfying pop effect, and demonstrates the ability to pause the animation and reset the marker to its original state when the user moves their cursor away from the map feature.

#### `Animate on Click`

[This example](src/Utils/MarkerClickPop.ts) showcases how to apply an animation effect to a point marker symbol when the user clicks on it. The animation employs Spring easing to create a smooth and visually appealing effect. Additionally, the code demonstrates how to add sound effects to enhance the animation experience.

#### `Radar Ping`

[This example](src/Utils/MarkerRadarPing.ts) showcases adding new animated graphics as an overlay to the Featurelayer. It uses a standard easing function "easeInOutCubic" and specifies an easing duration.

#### `Custom Aniamtion - CIM Symbols`

[This example](src/Utils/MarkerExplode.ts) demonstrates generating a custom animation using CIM Symbols to generate a timer and explosion effect on a clicked point. In this case a custom step function is used to change the rendered symbol on each animation step.
