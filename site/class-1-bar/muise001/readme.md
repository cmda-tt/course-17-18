![Preview picture of the bar-chart][cover]
 by [**@mbostock**][block-author]

# Bar Chært Ultimatum 97

This is a bar chart that show's the population of all people living in The Netherlands ordered by provence.

## background 

This bar chart was originaly made by (https://bl.ocks.org/mbostock/3887051). I removed several graphs to make it my own. I also changed the color of the bars and changed the values. The graph originaly conained six grouped bar-charts wich all contained seven values with their own data. I made it into one grouped bar-chart with the twelve provences of The Netherlands as value and changed the data to the real population per provence.

## Data

Both the X-axis and the Y-axis were changed and the colors of the bars.

* `X-axis` - I removed all the names of the grouped bars, made it into one bar and had it labeled 'Population of The Netherlands'
* `Y-axis` - This value fortunately changed automaticly as I changed the data of the bars
* `Colors` - I changed all colors to (in my opinion) more suiting collors. Offcourse I had to add a view colors because I used more values.

## D3 Features

*  [`d3.csv`] (https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md) - load and parse data
*  [`d3.scale.ordinal`] (https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md) - x-position encoding and color encoding
*  [`d3.scale.linear`] (https://www.dashingd3js.com/d3js-scales) - y-position encoding
*  [`d3.format`] (http://bl.ocks.org/zanarmstrong/05c1e95bf7aa16c4768e) - SI prefix formatting (e.g., “10M” for 10,000,000)
*  [`d3.max`] (http://bl.ocks.org/aaizemberg/f2eadcea50ec78f43662) - compute domains
*  [`d3.keys`] (https://github.com/d3/d3-collection#objects) - compute column names
*  [`d3.svg.axis`] (https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md) - display axes

## License

All rights belong to the user [**@Mbostock**][block-author]. 

[block-author]: https://bl.ocks.org/mbostock

[cover]: preview.png 
