# Debugger exercise

## index.js
* Changed `var margin = {top: 48, right: 48, bottom: 48, left: 48};` to `var margin = {t: 48, r: 48, b: 48, l: 48};`, because a lot of functions use `margin.l` instead of `margin.left`.
* Changed `d3.scale.linear()` to `d3.scaleLinear()` - D3 version 3 -> version 4.
* Changed `d3.scale.ordinal()` to `d3.scaleOrdinal()` - D3 version 3 -> version 4.
* Changed `d3.svg.axis().scale(x).orient('bottom')` to `d3.axisBottom(x)` - D3 version 3 -> version 4.
* Changed `d3.svg.axis().scale(y).orient('left')` to `d3.axisLeft(y)` - D3 version 3 -> version 4.
* Changed `d3.tsv('index.tsv', row, onload);` to `d3.csv('index.csv', row, onload);` because no `.tsv` is found.
* Changed `d3.extend()` to `d3.extent()`.

## index.html
* Added `<head>` element.
* Added `<body>` element.
* Changed link to stylesheet from `../index.css` to `./index.css`.
* Changed link to javascript from `../index.js` to `./index.js`.

## index.css
* Changed `width: 100w;` to `width: 100vw;` on line 11.
* Changed `height: 100h;` to `height: 100vh;` on line 12.
* Changed `fill: no;` to `fill: none;` on line 16.
