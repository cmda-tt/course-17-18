# Bug fixes Scatter Plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

> 💁 This example contains intentional bugs in HTML, CSS, and JavaScript,
> and uses an old version of d3: `d3@3`.  It’s meant to be an exercise in
> debugging skills.

As seen above - it was made intentionally with bugs. In this document I will explain the bugs I’ve fixed.

[![][cover]][url]

## Fixes

Firstly I’ve edited the bugs from the original js script file. I’ve changed these lines:
‘’’
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;

‘’’

to
‘’’
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
‘’’

And
‘’’
/* Size SVG. */
var svg = d3
  .select('svg')
  .attr('viewBox', [
    0,
    0,
    margin.l + width + margin.r,
    margin.t + height + margin.b
  ].join(' '))
  .append('g')
  .attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');
‘’’
to
‘’’
var svg = d3
    .select('svg')
    .attr('viewBox', [
    0,
    0,
    margin.left + width + margin.right,
    margin.top + height + margin.bottom
  ].join(' '))
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
‘’’

Also, the original file was trying to connect to index.tsv, but the file is called index.tsv. So I changed this:
‘’’
d3.tsv('index.tsv', row, onload);
‘’’
to:
‘’’
d3.csv('index.csv', row, onload);
‘’’

This fixed all the errors from the console.

## Upgrade to D3 V4

After the bugs were fixed I updated d3 v3 to d3 v4. This also caused some bugs. The fixes were as following:

V3 :

‘’’
/* Scales and axes. */
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
‘’’

to:

‘’’
/* Scales and axes. */
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
‘’’

## License

MIT © Marius Vledder

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2/debug
