# Debugging Code

## Description
I debugged the code from [`site/class-2/debug`](https://github.com/cmda-fe3/course-17-18/blob/master/site/class-2/debug).

## Background
This are the bugs I fixed:

### HTML
* Added `<head>` element
* Added `<body>` element
* Changed `href=../index.css` from `<link>` to `href=index.css`
* Changed `src=../index.js` from `<script>` to `src=index.js`
* Changed `src=https://d3js.org/d3.v3.min.js` from `<script>` to `src=https://d3js.org/d3.v4.min.js`

### CSS
* Changed `width: 100w` to `width: 100vw` 
* Changed `height: 100h` to `height: 100vh` 
* Changed `fill: no` to `fill: none`
* Changed `stroke: currentcolor` to `stroke: currentColor`

### JS
* Changed `d3.tsv('index.tsv', row, onload)` to `d3.csv('index.csv', row, onload)` 
* Changed `d3.scale.linear()` to `d3.sclaeLinear()`
* Changed `d3.svg.axis().scale(x).orient('bottom')` to `d3.axisBottom(x)`
* Changed `d3.svg.axis().scale(y).orient('left')` to `3.axisLeft(y)`
* Changed `d3.extend` to `d3.extent`
* Changed `margin.t` to `margin.top`
* Changed `margin.r` to `margin.right`
* Changed `margin.b` to `margin.bottom`
* Changed `margin.l` to `margin.left`
* Added `.style("fill", "black")` to the `text` elements with class `label`
* Replaced all single quotes with double quotes

## Features
* [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
* [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
* [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
* [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
* [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License
GPL-3.0 © Titus Wormer
