# Multi-Series Line Chart

A multi-series line chart visualising the temperature of several places in the
Netherlands based on a [`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Data

The dirty data, from [`knmi.nl`][data-source], is covering the 3th of may 1996; the birthday of [**@danoszz**] in four different locations in the Netherlands.

## Usage

To use this visualization in a local environment you can take the following steps in your favorite terminal like application

```
cd yourdirectory

```

```
git clone https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3-clean/danoszz

```

```
cd danoszz

```

```
python -m SimpleHTTPServer 8000

```

## To do

* [ ] Pull time and date in to HTML
* [ ] Add function for collapse of labels


## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.extent`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.text`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleTime`, `d3.scaleLinear`, `d3.scaleOrdinal`, and
    `d3.schemeCategory10`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.line` and `d3.curveBasis`
    — Graphical primitives

## License

GPL-3.0 © Titus Wormer and extended by Daan van der Zwaag MIT ©

[block]: https://bl.ocks.org/mbostock/3884955

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-3/clean

[data-source]: https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi

[data-example]: example.json
