# Sort

A [bar chart][original] visualising the frequency of letters in the
English language with sorting capabilities based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Data

Comma-separated values (CSV) with 26 rows and two columns:

*   `letter` — Each letter in the alphabet
*   `frequency` — Number describing how frequent the corresponding letter
    occurs in the English language

## Features

*   [`d3-tip`](https://github.com/Caged/d3-tip)
    — Tooltips!
*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max` and `d3.ascending`
    — Array statistics and searching
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
*   [`d3-timer`](https://github.com/d3/d3-timer#api-reference)
    — `d3.timeout`
    — Efficient animation queueing

## License

GPL-3.0 © Titus Wormer

[original]: https://github.com/cmda-fe3/course-17-18/tree/master/site/class-1-bar/wooorm#readme

[block]: https://bl.ocks.org/mbostock/3885304

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-4/sort/
