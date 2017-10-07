# Debugging a scatter plot

This assignment is about debugging the code that is found [here](https://github.com/cmda-fe3/course-17-18/tree/master/site/class-2/debug) to make the broken scatter plot work.

## Background

The assignment is part of the 'Front-end development 3' course, which is part of the study programme 'Communication and Multimedia Design'. It's specifically meant to test the student's knowledge of d3.

## Fixes

There were fixes of different kinds to be made.

* I found the biggest issue to be the errors that faulty references to the margin object caused.
`margin.l`, `margin.t`, `margin.r`, `margin.b` were used where `margin.left`, `margin.top`, `margin.right`, `margin.bottom` should be used. This fixed a lot of issues.

* The HTML linked to the CSS and JS with `../index.css` and `../index.js`. I had to remove the periods and the slashes in order to make the files link correctly.

* D3 v3 features like `scale.linear` and `scale.ordinal` were updated to the v4 features, being `scaleLinear()` and `scaleOrdinal()`. The same goes for `axisBottom()` and `axisLeft()`.

* Removing the unnecessary whitespace from the `attr('viewBox'` section made that part work.

* `d3.tsv` changed to `d3.csv`, `index.tsv` to `index.csv`.

* `d3.extend()` changed to `d3.extent()`.


## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Titus Wormer (from [assignment](https://github.com/cmda-fe3/course-17-18/blob/master/site/class-2/debug/readme.md))
