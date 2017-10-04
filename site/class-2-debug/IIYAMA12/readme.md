# Debugging

## Background
For this assignment it was required to debug the code, fix the errors/warnings and upgrade the code from _d3 v3_ to _3d V4_.

## Changes

### Fixed html and replaced code style
* Fixed attribute values of link element.
* Rewrote attributes to my style (style)


### Fixed CSS
* The property font-family does not accept fontnames with spaces, unless they are grouped with quotation marks.
* Added the correct units for the width and height property.
* Replaced the value **no** of property _fill_ to **none**.
* Replaced **currentcolor** with **black**

### Updated js code to _d3 v4_.

```js
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft().scale(y);
```

## License
GPL-3.0 © Titus Wormer
