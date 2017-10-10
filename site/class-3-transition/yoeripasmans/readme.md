# Animation

For this assignment I've animated a bubble chart using a 3d transition.

![][cover]

## Background

### index.html

- Moved Javascript and CSS into separate files.
- Linked to Javascript and CSS files.
- Added heading

### index.css

- Added basic styles to body, heading and svg

### index.js

- Changed name of variable 'node' to 'svg'

- Changed the svg selection.

from

```javascript
var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");
```

to

```javascript
var diameter = 660;
var svg = d3.select('body').append('svg')
  .attr("width", diameter)
  .attr("height", diameter);
```

- Added the transition by easing the radius of the circles with a duration of 2 seconds.

```javascript
.transition()
.ease(d3.easeElasticOut)
.attr("r", function(d) {
  return d.r;
})
.duration(2000);
```

- Changed the colors of the bubbles with an self made color scheme

from:

```javascript
var color = d3.scaleOrdinal(d3.schemeCategory20c);
```

to:

```javascript
var color = d3.scaleOrdinal(["#DB5542", "#5CCBC1", "9DE0DA", "#F1BBB3", "#333136", "#ADADAF"]);
```

- Added an attribute on the second tspan to make the labels with an enter visual better

```javascript  
node.selectAll("tspan:nth-child(2)")
.attr("y", 15);
```

### index.csv

- Changed the existing data to my own data

## Data

Comma-separated values (CSV) with 5 rows and two columns. Consist games with my own popularity factor added to it:

- `id` -- Name of the game
- `value` -- Popularity

## Features

- [d3.scale.ordinal](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
- [d3.tsv](https://github.com/d3/d3-request/blob/master/README.md#tsv)
- [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select)
- [d3.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll)
- [_selection_.append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
- [_selection_.attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)
- [_selection_.enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)
- [d3.pack](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack)
- [d3.hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy)
- [_node_.sum](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_sum)
- [_node_.each](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_each)

## License

[MIT](https://opensource.org/licenses/MIT) © Yoeri Pasmans

[cover]: preview.png
