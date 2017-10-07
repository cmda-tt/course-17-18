# Scatter plot

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`](https://bl.ocks.org/mbostock/3887118) by
[**@mbostock**](https://github.com/mbostock) (GPL-3.0).

> 💁 This example contains intentional bugs in HTML, CSS, and JavaScript,
> and uses an old version of d3: `d3@3`.  It’s meant to be an exercise in
> debugging skills.

![](preview.png)

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## Knows Bugs
### JS
- [x] tsv is not found
	- The file was a csv
- [x] index.css is not found
	- Wrong routing
- [x] index.js is not found
	- Wrong routing
- [x] A typeerror - d3.extend is seen as undefined
	- It was .extent
- [x] Invalid values for circle and rect (parsing error)
	- margin.l should be margin.left ect.

### CSS
- [x] width: 100w should be 100vw same for height should be vh
- [x] currentcolor shoudl be currentColor
- [x] path fill should be *none* instead of no

### HTML
- [x] Needs cleaning

## Changelog
- Updates D3.v3 to D3.v4

## License

GPL-3.0 © Kang Yun Wang (Kevin Wang)

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/kyunwang
