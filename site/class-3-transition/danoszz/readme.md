# Multi-Series Line Chart with transitions

This line chart is constructed from a TSV file storing the daily average temperatures of New York, San Francisco and Austin over the last year. It is based on this [`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Transitions

Basic transitions are put on text items and the axis by the following method:

```
var t = d3.transition().duration(750).ease(d3.easeCubicInOut);

g.append("g")
	  .transition(t).delay(600);

```

The line animation is based on this [bl.ock](http://bl.ocks.org/duopixel/4063326)

```
var totalLength = path.node().getTotalLength();

path
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
    .duration(2000)
    .ease("linear")
    .attr("stroke-dashoffset", 0);

```


## Usage

To use this visualization in a local environment you can take the following steps in your favorite terminal like application

```
cd yourdirectory

```

```
git clone https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3-transition/danoszz

```

```
cd danoszz

```

```
python -m SimpleHTTPServer 8000

```

## To do

* [ ] Make colors bit more appealing
* [ ] Ease Y and X axis


## Features

* d3.tsv - load and parse data
* d3.time.format - parse dates
* d3.time.scale - x-position encoding
* d3.scale.linear - y-position encoding
* d3.scale.category10, a d3.scale.ordinal - color encoding
* d3.extent, d3.min and d3.max - compute domains
* d3.keys - compute column names
* d3.svg.axis - display axes
* d3.svg.line - display line shape

## License

GPL-3.0 © Mike Bostock and extended by Daan van der Zwaag MIT ©

[block]: https://bl.ocks.org/mbostock/3884955

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-3/clean

[data-source]: https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi

[data-example]: example.json
