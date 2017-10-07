# Debugger assignment
For this assignment I've debugged A simple responsive scatter plot that visualize the dimensions of sepals and petals of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Background
I've made some changes to the HTML, CSS, and JavaScript files and updated the javascript libary D3 in my code from v3 to v4. Here's a list of all the changes:

### index.html
* Added `<head>` element
* Changed stylesheet link from `../index.css` to `index.css`
* Added `<body>` element
* Changed javascript link from `../index.js` to `index.js`
* Changed `<script src="https://d3js.org/d3.v3.min.js"></script>` to `<script src="https://d3js.org/d3.v4.min.js"></script>` - D3 v3 to v4.

### index.css
* Changed `width: 100w;` to `width: 100vw;`
* Changed `height: 100h;` to `height: 100vh;`
* Changed `fill: no;` to `fill: none;`

### index.js

* Changed `d3.tsv('index.tsv', row, onload);` to `d3.csv('index.csv', row, onload);` - because the data was in a `csv` format
* Changed `d3.extend()` to `d3.extent()`.
* Changed `margin.t, margin.r, margin.b, margin.l` to `margin.top, margin.right, margin.bottom, margin.left` to make the functions correct and more readable.
* Changed `d3.scale.linear()` to `d3.scaleLinear()` - D3 v3 to v4.
* Changed `d3.scale.ordinal()` to `d3.scaleOrdinal()` - D3 v3 to v4.
* Changed `d3.svg.axis().scale(x).orient('bottom')` to `d3.axisBottom(x)` - D3 v3 to v4.
* Changed `d3.svg.axis().scale(y).orient('left')` to `d3.axisLeft(y)` - D3 v3 to v4

## Data
Csv file with sepals and petals of various iris flowers based on a [`bl.ock`]

## Features
- [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
- [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
- [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
- [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
- [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License
GPL-3.0 © Titus Wormer Added changes by Yoeri Pasmans

[block]: https://bl.ocks.org/mbostock/3887118
[block-author]: https://github.com/mbostock
[cover]: preview.png
[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/yoeripasmans
