# Debug
Debugging errors in the code to fix the chart.

[![][cover]][url]

## Background
In the code there are a few errors that had to be fixed to make it work, there was a linking problem like the TSV into CSV and next to this there were problems with unfinished words (margins). After upgrading d3 into d4, new errors came up like Extent and Axis. I was able to fix these by reading the changing log. 

## Data
The data comes from a CSV file. The chart is a scatter plot.

## Features
- [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
- [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
- [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
- [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
- [`Change log`](https://github.com/d3/d3/blob/master/CHANGES.md)

## License
GPL-3.0 © Titus Wormer

[cover]: preview.png

[url]: https://github.com/wesleyc94/course-17-18/tree/debug/site/class-2-debug/wesleyc94
