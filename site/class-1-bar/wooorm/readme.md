# Bar chart

A simple responsive bar chart visualising the frequency of letters in the
English language with pretty colours based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Background

I wanted to create a responsive bar chart.  This one re-renders on the
[`resize`][resize] event.  You can also use the `viewBox` property on the
`<svg>` element, but that only scales the rendered visualisation.  The benefit
of using `resize` is that labels will remain legible.

## Data

Comma-separated values (CSV) with 26 rows and two columns:

*   `letter` — Each letter in the alphabet
*   `frequency` — Number describing how frequent the corresponding letter
    occurs in the English language

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
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements

## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3885304

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-1-bar/wooorm/

[resize]: https://developer.mozilla.org/en-US/docs/Web/Events/resize
