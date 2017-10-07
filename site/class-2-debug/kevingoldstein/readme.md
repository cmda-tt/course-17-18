# Scatter plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

![picture](preview.png)

## Background

The Code was very messy and contained a lot of bugs and errors.
I fixed the code by doing the following things:

*HTML:*
1. I used the default html tags, so I added a Header and Html tag.
2. I used quotes for some attributes where it was needed.

*CSS:*
1. Changed 100v and w to 100vw and vh
2. fill: no changed to fill none;

*Js:*
1. TSV changed to CSV
2. extend -> extent
3. changed the line between [] in the viewBox in svg attr
4. In the code they used margin.l and margin.t etc. so I changed it to margin.left and margin.top
5. Closed off the second svg with a ;

*D3.v3 -> D3.v4*
1. Changed the link in <script src="https://d3js.org/d3.v3.min.js"></script> to <script src="https://d3js.org/d3.v4.min.js"></script>
2. scale.linear is now scaleLinear
3. scale.ordinal is now scaleOrdinal
4. svg.axis().scale(y) en svg.axis().sacle(x) are now axisBottom(x) en AxisBottom(y)

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Kevin Goldstein

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/kevingoldstein

https://stackoverflow.com/questions/40465283/what-is-d3-svg-axis-in-d3-version-4
