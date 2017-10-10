# Multi-Series Line Chart with interactivity

This line chart is constructed from a TSV file storing the daily average temperatures of New York, San Francisco and Austin over the last year. It is based on this [`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0) and my previous [`assignment`][previous-assignment] for the course [FE3](course-url).

[![][cover]][usage-link]

## Workflow

1. Decide if an already used chart could be used for this assignment. The other option is to pick a new static non-basic chart from the [d3’s example gallery](https://github.com/d3/d3/wiki/Gallery). Chosen method is to use a **previously made chart** from an earlier assignment.
2. Clone the [`class-2 transition assignment`][previous-assignment] repo and make it work locally without any console errors.
3. Try not to re-invent the wheel by searching for an [example](https://stackoverflow.com/questions/34886070/multiseries-line-chart-with-mouseover-tooltip) and make it work in your environment.
4. [Refact](https://en.wikipedia.org/wiki/Code_refactoring) the code to your personal coding style, throw in some appealing styling and make usable comments. 🔨



## Interactivity

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

## Features

***Basic features***

* [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select) - select an element from the document.
* [d3.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll) - select multiple elements from the document.
* [d3.min](https://github.com/d3/d3-array/blob/master/README.md#min) - compute the minimum value in an array.
* [d3.max](https://github.com/d3/d3-array/blob/master/README.md#max) - compute the maximum value in an array.
* [d3.extent](https://github.com/d3/d3-array/blob/master/README.md#extent) - compute the minimum and maximum value in an array.
* [d3.axisBottom](https://github.com/d3/d3-axis/blob/master/README.md#axisBottom) - create a new bottom-oriented axis generator.
* [d3.axisLeft](https://github.com/d3/d3-axis/blob/master/README.md#axisLeft) - create a new left-oriented axis generator.
* [d3.scaleOrdinal](https://github.com/d3/d3-scale/blob/master/README.md#scaleOrdinal) - create an ordinal scale.


***Bit more special features***

* [d3.tsv](https://github.com/d3/d3-request/blob/master/README.md#tsv) - get a tab-separated values (TSV) file.

* [d3.scaleTime](https://github.com/d3/d3-scale/blob/master/README.md#scaleTime) - create a linear scale for time.
* [d3.scaleLinear](https://github.com/d3/d3-scale/blob/master/README.md#scaleLinear) - create a quantitative linear scale.
* [d3.timeParse](https://github.com/d3/d3-time-format/blob/master/README.md#timeParse) - alias for *locale*.parse on the default locale.
* [d3.curveBasis](https://github.com/d3/d3-shape/blob/master/README.md#curveBasis) - a cubic basis spline, repeating the end points.
* [d3.easeCubicInOut](https://github.com/d3/d3-ease/blob/master/README.md#easeCubicInOut) - symmetric cubic easing.
* [d3.mouse](https://github.com/d3/d3-selection/blob/master/README.md#mouse) - get the mouse position relative to a given container.


#### For humans

> A fellow [student](https://github.com/vriesm060/fe3-assessment-1#features-humans-can-understand) implemented this section in his documentation to translate all the D3.js slang to a more understandable (developer) language. 👨‍💻

* Load plain data with the D3.js libary and visualize it in a chart
* Created a visual impression that includes:
  * a time period,
  * measured temperature,
  * three different cities in USA;
* Add interactivity when the user moves the mouse over the chart by showing:
	* the exact temperature,
	* exact position of the mouse;

## To do

* [x] Convert [features](#features) to V4 links documentation
* [x] Create preview image
* [ ] Make readme.md template for assessment-2
* [ ] Add comments in code



## License

GPL-3.0 © Mike Bostock and extended by Daan van der Zwaag MIT ©

[block]: https://bl.ocks.org/mbostock/3884955

[block-author]: https://github.com/mbostock

[cover]: preview.png

[previous-assignment]: https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3-transition/danoszz

[course-url]: https://cmda-fe3.github.io/course-17-18

[usage-link]: #usage
