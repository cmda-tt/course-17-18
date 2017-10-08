# Scatter plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

[![][cover]][url]

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## The bugs I fixed?

The first problem that I saw was this, a wrong linked file. So I changed it from
this:
```javascript
d3.tsv('index.tsv', row, onload);
```
to:
```javascript
d3.csv('index.csv', row, onload);
```


The second part of js that I fixed was this:
```javascript
var margin = {top: 48, right: 48, bottom: 48, left: 48};
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```

In d3 v4 you don't use any namespaces, so I turned it into:
```javascript
var margin = {
    top: 48,
    right: 48,
    bottom: 48,
    left: 48
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
```


So here is the same issue as above...:
```javascript
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```

And here is the fix, nice:
```javascript
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
```


In the css I changed this:
```css
svg {
  width: 100w;
  height: 100h;
}

.axis path {
    fill: no;
}
```

Not only did I changed the values into 'none', 'vw' and 'vh', but I
also changed the amount of tab spacing in the whole css file
because I set my tab default to four spaces:
```css
svg {
    width: 100vw;
    height: 100vh;
}


.axis path {
    fill: none;
}
```


Spended some good quality time with my duck, this sentence is unnecessary. Cheers.

## License

MIT © Jessie Gouw

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/jessiegouw
