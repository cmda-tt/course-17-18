# Please DO READ(/EAT) THIS readme.md
This is modified code of a bar-chart. It shows how 'zombie' hungry the people in the list are. Please do edit the list and add yourself on it.

## Background
The original code is created by _Mike Bostock’s_. Who created a simple bar chart, which I thought was useful as a good learning sample. After analysing the code piece by piece by using console.log, I started to change values to test which influence it would have on the design.

## Data
The tsv data contains a few zombie names in the first column(name). In the second column(hunger) it shows how hungry they are.
The hunger percentage is formatted as:
* 1.00 = 100%
* 0.75 = 75%
* 0.50 = 50%
* 0.25 = 25%


## Features
* **d3.scaleBand()** https://github.com/d3/d3-scale
* **d3.scaleLinear()** https://github.com/d3/d3-scale#continuous-scales
* **domain** https://www.dashingd3js.com/d3js-scales
* **d3.max** https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md
* **d3.axisBottom** https://github.com/d3/d3-axis/blob/master/README.md#axisBottom


## License
Bostock’s, M. (2017, 20 juli). Bar Chart [Source code]. Geraadpleegd van https://bl.ocks.org/mbostock/3885304
Licent: https://opensource.org/licenses/GPL-3.0


![Preview chart](preview.png)
