# Scatter plot 

A simple responsive scatter plot visualizing the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

![Alt text](preview.png)

## Bugs fixed
For this assignment I fixed a broken scatter plot. The HTML, CSS, and JavaScript contained several bugs. The chart also used d3js.V33 instead of d3js.V4.

I Fixed the following bugs:
### HTML:
* Gave it a basic HTML structure.
* Used `" "` to link the style en script files.
* Linked the script and stylesheet file with the wight path.
* Changed the d3js V3 script to `https://d3js.org/d3.v4.js`

### CSS:
* Changed the Unit of the "svg" style to `vh` and `vw`.
* Changed the value of the style of ".axis" path to `none`.
* Added the unit `px` to the value  the style of ".axis path,
  .axis line, .dot, rect"
* Changed curretcolor to `currentColor`.

### JavaScript:
* Made it readable by putting each rule of function in one line. 
* Changed some variable names to more accurate ones.
* Used `" "`.
* Corrected a typeerror of the word `extent` (It was written `extend`)
* Changed invalid values as "margin.t" to `margin.top`, I did the same with right, btom and left.
* Updated the d3js.V3 code to d3js.V4

You can find the previous code at [class-2/debug](https://cmda-fe3.github.io/course-17-18/class-2/debug).

## Data

Comma-separated values (CSV) with eight rows and five columns:
* `age` — Stands for the age group from the population. 
* `population` — Stands for how big a population is.

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)


## License

GPL-3.0 © Luisa Braga dos Santos

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock
