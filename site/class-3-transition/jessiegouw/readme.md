# Area Chart

This simple line chart is constructed from a TSV file storing the closing value of AAPL stock over the last few years. The chart employs [conventional margins](/mbostock/3019563) and a number of D3 features:

![alt text](https://github.com/jessiegouw/course-17-18/blob/transition/site/class-3-transition/jessiegouw/preview.png)
## How?

For the animation of my graph I added a transition and an easePolyOut
to the 'path'. I almost threw my macbook out of the window. Most important thing, is to read, good.

## Features
* [d3-dsv](https://github.com/d3/d3-dsv) - parse tab-separated values
* [d3-time-format](https://github.com/d3/d3-time-format) - date parsing and formatting
* [d3-scale](https://github.com/d3/d3-scale) - position encodings
* [d3-array](https://github.com/d3/d3-array) - data processing
* [d3-axis](https://github.com/d3/d3-axis) - axes
* [d3-shape](https://github.com/d3/d3-shape) - lines
* [d3-transition](https://github.com/d3/d3-transition) - transition
* [d3-ease](https://github.com/d3/d3-ease) - ease

## License

GPL-3.0 © Jessie Gouw

[block]: https://bl.ocks.org/mbostock/3883195
