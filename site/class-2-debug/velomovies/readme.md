# Debugging

In this excercise you had to debug some code. The chart in the excercise is based on a [`bl.ock`](https://bl.ocks.org/mbostock/3887118) by
[**@mbostock**](https://github.com/mbostock) (GPL-3.0).

![Preview image](preview.png)

## Background

For this example I cleared some bugs in the code. First thing I did was checking if the code would run. But (as you may expect) nothing showed up. There where a few errors and I cleared them.

I made the `.tsv` import an `.csv` and after that I changed even more code.
***

From this
```html
<link rel=stylesheet href=../index.css>
<script src=../index.js></script>
```
To this
```html
<link rel=stylesheet href=index.css>
<script src=index.js></script>
```
***
And from this
```javascript
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
To this
```javascript
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
  ```
  ***
  And changed this
  ```javascript
  x.domain(d3.extend(data, sepalWidth)).nice();
  y.domain(d3.extend(data, sepalLength)).nice();
  ```
  
  To this
  ```javascript
  x.domain(d3.extent(data, sepalWidth)).nice();
  y.domain(d3.extent(data, sepalLength)).nice();
  ```
  ***
  Also in the CSS file where a few bugs. I changed some style from this
  ```css
  svg {
  width: 100vw;
  height: 100vh;
}

.axis path {
  fill: none;
}
```
To
  ```css
  svg {
  width: 100vw;
  height: 100vh;
}

.axis path {
  fill: none;
}
```
***
After I fixed those bugs I had to use d3.v4. This showed some bugs. It doesn't use namespaces so I turned this
```javascript
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```
To this
```javascript
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
```

> At the end I had to change the title to my own name [**velomovies**](https://github.com/velomovies)

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Victor Zumpolle
