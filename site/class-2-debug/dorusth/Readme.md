# Debug

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).



## Background

For this assignment we had to debug the code we got and update it from d3 version 3 to version 4


## Debugging

#### js
The first issue i ran in to was that the js was looking for a tsv file which it couldn't find because the data was in a csv file, so i changed the it so it would use the csv file.

the margins var had the value's as top,right,bottom,left but other vars and functions were looking for a margin.t/r/b/l so i changed the values in the margin var so it would work.

another thing that gave an error was a that there was a function that was called "extend" which should have been "extent", so i changed that.

#### CSS
While doing a quick check of the css I found a few errors
```
svg {
  width: 100w;
  height: 100h;
}

.axis path {
  fill: no;
}
```
should be

```
svg {
  width: 100vw;
  height: 100vh;
}

.axis path {
  fill: none;
}
```


## Update
The next step was t update to version 4 of d3
The update to v4 was as simple as changing ```<script src="https://d3js.org/d3.v3.min.js"></script>``` to ```<script src="https://d3js.org/d3.v4.min.js"></script>```.

After this nothing worked so i went to check the console with the changelog to fix the errors.
The main issue was that certain functions were named differently like ```scale.linear``` became ```scaleLinear``` which made it that the scale vars went from:
```
/* Scales and axes. */
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');

```
to
```
/* Scales and axes. */
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
```



## License

GPL-3.0 © Titus Wormer
<!--  -->

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock
