# Debugging

## Short description
Debugging different kind of filetypes to get a working d3 scatter plot.

## Background
In this assignment I’ve debugged the different kind of filetypes to create a working d3 scatter plot.

The filetypes included were:
1. .html
2. .class
3. .js
4. .csv

---

Below are the bugs I've fixed:
1. Correct linking between the files
2. Proper naming of the margin properties (left -> l)
3. Adding double quotation marks within the .html file
4. Changed the data source from .tsv to .csv

Furthermore I've changed the version of d3 from v3 to the newest v4. The change required some edits to be made, including:
1. ```scale.linear``` -> ```scaleLinear```
2. ```scale.ordinal``` -> ```scaleOrdinal```
3. ```d3.svg.axis().scale(x).orient('bottom')``` -> ```d3.axisBottom(x);```
4. ```d3.svg.axis().scale(y).orient('left')``` -> ```d3.axisLeft(y);```


## License
MIT © Leon van Zijl

## Source
[Scatter Plot by Mike Bostock](https://bl.ocks.org/mbostock/3887118)
