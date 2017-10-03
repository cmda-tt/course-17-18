# Debug Opdracht

Deze opdracht vervult de opgegeven school opdracht.

## Background
De opdracht bevat het d3 werkend krijgen, en het daarna het
herschrijven zodat d4 werkt.

## Code aanpassingen.
HTML
```html
is gestructureerd dat het werkt en naar D4 gezet.

<script src="https://d3js.org/d3.v4.min.js"></script>
Om v4 werkend te krijgen
```


```javascript
var margin = {top: 48, right: 48, bottom: 48, left: 48};
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
//Later in the code
var svg = d3
.select('svg')
.attr('viewBox', [
  0,
  0,
  margin.l + width + margin.r,
  margin.t + height + margin.b
].join(' '))
.append('g')
.attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');

```
naar
```javascript
var margin = {
  top: 48,
  right: 48,
  bottom: 48,
  left: 48
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

/* Scales and axes. */
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y)

/* Size SVG. */
var svg = d3.select('svg')
  .attr('viewBox', [
    0,
    0,
    margin.left + width + margin.right,
    margin.top + height + margin.bottom
  ].join(' '))
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
```

En om het CSV te laden:
```javascript
d3.csv('index.csv', row, onload);
```
## V4
Dit is de code dat herschreven is om van v3 naar v4.

Van:
```javascript
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```

Naar:
```javascript
var x = d3.scaleLinear().range([0, width]),
var y = d3.scaleLinear().range([height, 0]),
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']),
var xAxis = d3.axisBottom(x),
var yAxis = d3.axisLeft(y)
```

## licentie
MIT Sam Guliker
