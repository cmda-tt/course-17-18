# Transition
## Preview
![preview][cover]
## Description
I have taken the [bubblechart][chart] made by [Mike Bostock][author]

## Background
I have separated everything into different files. The files that are included are:
* index.html
* index.js
* index.csv

I changed and added a couple of things. They are listed below:

### index.html
* Added `<head>` tag with:
  * `<meta>` tag
  * `<title>@laurens-booij</title>`

* Added `<body>` tag
* Added `<script` tag that links to `index.js`

### index.csv
Changed the data so it relates to me. It contains different sets of data regarding different aspects of my life.

It is written in the following format:
```
id, value
lau.eten.PastaCarbonara,3938
```
The id `lau.eten.PastaCarbonara` is built up as follows:
* `lau`             <-- main topic
* `.eten`           <-- category
* `.Pastacarbonara` <-- Subject

### index.js
I have made changes to the following block of code. The comments indicate wheter I added a line or changed it from the original.

```javascript
node.append("circle")
    .attr("id", function(d) { return d.id; })
    .attr("r", 0)                                               // add
    .attr("opacity", "0")                                       // add
    .style("fill", function(d) { return color(d.package); })
    .transition()                                               //add
    .delay(1000)                                                // add
    .ease(d3.easeElastic)                                       // add
    .duration(1000)                                             // add
    .attr("opacity", "0.8")                                     // add
    .attr("r", function(d) { return d.r; });                    //changed position
```

## Features
Makes use of the D3 framework.

## License
Released under the GNU General Public License, version 3. © Laurens Booij


[cover]: preview.png
[chart]: https://bl.ocks.org/mbostock/4063269#index.html
[author]: https://bl.ocks.org/mbostock
