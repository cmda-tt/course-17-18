# DEBUGGER
This asignment is about debugging given code and formatting d3-v3 to the recenter v4 version.

![cover](preview.jpg)

##### Changes HTML
* Fixed the viewport code that was badly written
* Added "" to the script that loads the css and js

##### Changes Javascript
* Fixed all margin.l, margin.b, margin.t, margin.r by writing the full length of the elements; left, bottom, right, top
* Added d3.csv('index.csv', row, onload); instead of tsv version
* d3.extend is not a function, must be d3.extent!

##### Changes CSS
* Added svg {width: 100vw;height: 100vh;} **instead** of width: 100w;height: 100h;

> Above :point_up: mentioned changes made the visualisation possible of the scatter plot.
> :point_right: to update the v3 version to v4 I have done the following steps:

* In the index.thml changed d3.v3.min.js to d3.v5.min.js
> * In index.js changed: d3.scale.linear to d3.scaleLinear
  * d3.scale.ordinal to d3.scaleOrdinal
  * d3.svg.axis().scale(x).orient('bottom');  to   d3.axisBottom(x);
  * d3.svg.axis().scale(y).orient('left');    to   d3.axisLeft(y);



 ##### Features
*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)



 ##### License
 GPL-3.0 © Sebas Schmidt
