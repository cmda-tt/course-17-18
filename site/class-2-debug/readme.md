# Scatter plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

> 💁 This example contains intentional bugs in HTML, CSS, and JavaScript,
> and uses an old version of d3: `d3@3`.  It’s meant to be an exercise in
> debugging skills.

[![][cover]][url]

* [Javascript debug](Javascript)
* [CSS debug](CSS)
* [HTML debug](HTML)


## Javascript debugger list:


**before:** all margin's where defined as margin.l, margin.r etc.
``` 
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```
**after:** By changing the margins to margin.left, margin.right the code carun.
``` 
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
```

**before:** This is the way D3 was written in version 3.
``` 
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```

**after:** In version 4 everything is made shorter, so instead of a d3 having a scale attribute and on top of that a linear attribute. It now has one scaleLinear attribute.
``` 
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);
```

**before:** The code wasn't written propperly.
``` 
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
```

**after:** With this line:`var width = 960 - margin.left - margin.right;
             var height = 500 - margin.top - margin.bottom;` We've already defined the margin's. We just need to write the proper code the make sure the reference is linked correctly.
``` 
var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
```
**before:** Extend is not a function.
```
x.domain(d3.extend(data, sepalWidth)).nice();
y.domain(d3.extend(data, sepalLength)).nice();
```
**after:** Extent **is a** function.
```
x.domain(d3.extent(data, sepalWidth)).nice();
y.domain(d3.extent(data, sepalLength)).nice();
```

## CSS debugger list

**before:** a value of 100w or 100h doens't exist.
```
svg {
  width: 100w;
  height: 100h;
}
```
**after:** It should be vw (view width) and vh (view height).
```
svg {
    width: 100vw;
    height: 100vh;
}
```
**before:** If you don't want a fill for an element "no" isn't the right value.
```
.axis path {
    fill: no;
}
```
**after:** None gives a better result.
```
.axis path {
    fill: none;
}
```
**before:** By writing the code on different lines like this only rect gets the style changes.
```
.axis path,
.axis line,
.dot,
rect {
  stroke: currentcolor;
  stroke-width: 2;
}
```
**after:** Down below is the correct way to make sure every element gets the style change.
```
.axis path, .axis line, .dot, rect {
    stroke: currentcolor;
    stroke-width: 2;
}
```

If you want to see text, it's important to make sure it has the right color fill or a fill at all.
```
text {
    fill: black;
}
```

## HTML debugger
Bad HTML document, missing quotes and correct linking.
```
<!doctype html>
<!--Based on https://bl.ocks.org/mbostock/3887118 by Mike Bostock-->
<meta charset=utf8>
 
<!--Prevent favicon error from showing up-->
<link rel="shortcut icon" type=image/x-icon href=data:image/x-icon;,>
<title>Debug starter code</title>
<meta content=width=device-width,initial-scale=1 name=viewport>
<link rel=stylesheet href=../index.css>
<svg></svg>
 
<script src=https://d3js.org/d3.v3.min.js></script>
<script src=../index.js></script>
```
A much better HTML document. fixed quotses and linking.
***UPDATED V3 to V4***
```
<!DOCTYPE html>
<!--Based on https://bl.ocks.org/mbostock/3887118 by Mike Bostock-->
<html>
  <head>
    
    <meta charset="utf8"><!--Prevent favicon error from showing up-->
    <link href="data:image/x-icon;," rel="shortcut icon" type="image/x-icon">
    <title>@jajan20</title>
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <link href="../index.css" rel="stylesheet">
  
  </head>
 
  <body>
    
    <svg width="960" height="500" viewbox="0 0 960 500"></svg> 
    <script src="https://d3js.org/d3.v4.min.js"></script> 
    <script src="../index.js"></script>
 
  </body>
</html>
```

## Dataset 

The set was in a different format so I changed it to the correct format.

## Features

*   [`d3.scaleLinear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scaleOrdinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Jamie Jansen

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock





