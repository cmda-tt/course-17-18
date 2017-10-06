# Debug assignment

#### in this assignment i've modified a false code to work again

## changes

1. margin
2. loading data(tsv->csv)
3. extend(t)
4. v3 to v4

### margin
the margin was not written correctly. The code used margin.l instead of margin.left. It was the same with right, top, bottom.

before:

```
var margin = {
    top: 48,
    right: 48,
    bottom: 48,
    left: 48
};
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;

var svg = d3
    .select('svg')
    .attr('viewBox', [
    0,
    0,
    margin.l + width + margin.r,
    margin.t + height + margin.b
```
after:

```
var margin = {
    top: 48,
    right: 48,
    bottom: 48,
    left: 48
};
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var svg = d3
    .select('svg')
    .attr('viewBox', [
    0,
    0,
    margin.left + width + margin.right,
    margin.top + height + margin.bottom
 ```
 ### loading data
 
 i've changed the tsv to csv to match the right data file.
 
 before:
 ```
 d3.tsv('index.tsv', row, onload);
 ```
 after:
 ```
 d3.csv('index.csv', row, onload);
 ```
 
### extend(t)

i've changed the d3.extend to d3.entent:

before:
```
function onload(data) {
    x.domain(d3.extend(data, sepalWidth)).nice();
    y.domain(d3.extend(data, sepalLength)).nice();
```
after:
```
function onload(data) {
    x.domain(d3.extent(data, sepalWidth)).nice();
    y.domain(d3.extent(data, sepalLength)).nice();
```
### v3 to v4

i've rewritten code to match the v4 version. In index.html i've updated the d3 link to v4.

before:

```
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```
after:
```
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
```

## License

MIT @ Basrikkers


