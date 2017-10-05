# Barchart

This is a little barchart of the amount of searches on google of `buy drugs online`. It is based [`bl.ock`](https://bl.ocks.org/mbostock/3885304) by
[**@mbostock**](https://github.com/mbostock) (GPL-3.0).

![afbeelding](https://www.vormplatform.nl/wp-content/uploads/2013/01/strange-fruits-sarah-illenberger-3_o.jpg)

## Background

I did a little excercise for making a barchart with d3.js. The animations in this chart are only with an hover state in CSS. Next to that i've changed the colors of the chart with CSS.

## Data

d3 is using a CSV (comma-separated value) file to make a visualization.
* `Maand` — The month of when the search is done
* `Gezocht` — The percentage of how much a search is done

## Features
*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.csv`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleBand` and `d3.scaleLinear`
    — Position encodings

## License

GPL-3.0 © Victor Zumpolle
