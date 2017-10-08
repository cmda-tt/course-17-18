# Scatter plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

> 💁 This example contains intentional bugs in HTML, CSS, and JavaScript,
> and uses an old version of d3: `d3@3`.  It’s meant to be an exercise in
> debugging skills.

[![][cover]][url]

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/MauSNL

# My edits

## Edited CSS

The old file was trying to adjust the size of the SVG to fill the screen, but it forgot to use the "v" for both the height and width.

#### Old
svg {
  width: 100w;
  height: 100h;
}

#### New
svg {
  width: 100vw;
  height: 100vh;
}

The old code here was trying to give the .axis path no fill. But instead of saying fill:none; it said fill:no;.

#### Old
.axis path {
  fill: no;
}

#### New
.axis path {
  fill: none;
}

## Edited JS

In the JS were some mistakes aswell. For starters the code was not doing much because the d3.extend was causing issues. I looked up the error and it showed it was suposed to be d3.extent and I changed that.

#### Old
x.domain(d3.extend(data, sepalWidth)).nice();
y.domain(d3.extend(data, sepalLength)).nice();

#### New
x.domain(d3.extent(data, sepalWidth)).nice();
y.domain(d3.extent(data, sepalLength)).nice();

The code was also filled with shorter versions of margin-left and stuff like that, but margin-l doesn't do anything. He or she must have thought it was a shortcut for the same function, but instead he made it up himself or herself.

#### Old
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;

and

 .attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');

#### New
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

and

.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

another thing I found was a typo of the word csv. When the code was trying to load the data it was looking for a .tsv and not the provided .csv so I changed that.

#### Old

d3.tsv('index.tsv', row, onload);

#### New

d3.csv('index.csv', row, onload);
