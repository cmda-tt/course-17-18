# Debug
## Description
I have debugged a responsive scatter plot that visualizes the dimensions of sepals and petals of various iris flowers based on a [`bl.ock`][block] by
+[**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Background
The file types that are included are:
* `.html`
* `.css`
* `.js`
* `.csv`

## Changes
I have made changes to the html, css and JavaScript files. The changes are listed below:

### index.html
* Added quotation marks to various html element attributes.
* Changed link element from `<link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon";,>` to `<link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon";>`
* Added `<head>` element.
* Added `<body>` element.
* Changed the href value of the stylesheet link from `../index.css` to `index.css`.
* Changed the src value of the `<script>`element from `../index.js` to `index.js`.
* Added `viewBox="0 0 2000 2000"` attribute to `<svg>` element.
* Changed loaded d3 link from v3 to v4.

### index.css
* Changed `width: 100w` to `width: 100vw`
* Changed `height: 100h` to `height: 100vh`
* Changed `fill: no` to `fill: none`

### JavaScript
* Added missing semicolon's.
* Changed `d3.tsv('index.tsv', row, onload);` to `d3.csv('index.csv', row, onload);`

* Made changes that facilitated the d3 upgrade from v3 to v4:
  * Changed `d3.scale.Linear()` to `d3.scaleLinear()`
  * Changed `d3.scale.ordinal()` to `d3.scaleOrdinal()`
  * Changed `d3.svg.axis().scale(x).orient('bottom')` to `d3.axisBottom(x)`
  * Changed `d3.svg.axis().scale(y).orient('left')` to `d3.axisLeft(y)`
  * Changed `d3.extend` to `d3.extent`

* Changed:
  `margin.l`
  `margin.r`
  `margin.t`
  `margin.b`

  To: `margin.left`
  `margin.right`
  `margin.top`
  `margin.bottom`

## Data
Csv file with data about sepals and petals of various iris flowers.


## License
GPL-3.0 © Titus Wormer changed by Laurens Booij

[block]: https://bl.ocks.org/mbostock/3887118
[block-author]: https://github.com/mbostock
[cover]: preview.png
[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/laurens-booij
