# Axis

A [bar chart][original] visualising the several fields of population
in USA states by changing the data displayed on one axis based on a
[`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0) and
[`bl.ock`][block-filter] by [**@jonahwilliams**][block-filter-author].

[![][cover]][url]

## Data

Tab-separated values (TSV) with 204 rows and 13 columns:

*   `year` — Year of measurement, between 2006 and 2012 (only 2012 is visualised)
*   `state` — USA state
*   `totalPopulation`, `totalCitizen`, `totalRegistered`, `totalVoted`,
    `hispanicPopulation`, `hispanicCitizen`, `hispanicRegistered`,
    `hispanicVoted`
    — Number (in thousands)
*   `percentHispanicPopulation`, `percentHispanicRegistered`,
    `percentHispanicVoted`
    — Number (between 0 and 1)

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.max`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-format`](https://github.com/d3/d3-format#api-reference)
    — `d3.format`
    — Format numbers
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.tsv`
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

[block-filter]: http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909

[block-author]: https://github.com/jonahwilliams

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-4/axis/
