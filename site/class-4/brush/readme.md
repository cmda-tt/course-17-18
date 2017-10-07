# Brush

An area chart with a brush visualising monthly stock data of S&P 500 based on a
[`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Data

Comma-separated values (CSV) with 123 rows and two columns:

*   `date` — Month and year
*   `price` — Stock price as a number in dollars

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max` and `d3.extent`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-brush`](https://github.com/d3/d3-brush#api-reference)
    — `d3.brushX`
    — One- or two-dimensional region selections
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleTime` and `d3.scaleLinear`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select` and `d3.event`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.area` and `d3.curveMonotoneX`
    — Graphical primitives
*   [`d3-time-format`](https://github.com/d3/d3-time-format#api-reference)
    — `d3.timeParse`
    — Parse and format times
*   [`d3-zoom`](https://github.com/d3/d3-zoom#api-reference)
    — `d3.zoom` and `d3.zoomIdentity`
    — Pan and zoom

## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-4/brush/
