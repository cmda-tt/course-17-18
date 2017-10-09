# Debugger

A simple responsive scatter chart visualising the dimensions of sepals and petals of various iris flowers based by [**@mbostock**][block-author].

## Background

For this assignment I had to find and fix the bugs that where in the HTML, CSS and JS files. It was not the intention to change the whole chart. Only to fix the bugs.

![preview][cover]

## Fixing the bugs

The Javascript file contained several bugs and problems. Here below you can see one of the bugs that I've encountered with:

```javascript
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```
The mnames fot the margings where not very good names. So I've changed the names into there full names. As you can see below:

```javascript
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
```

The console in the browser also age an error: 'data.tsv not found'. So when I looked into the code it was linked correctly, but the file was not a .tsv file, but a .csv file. As you can see below:

```javascript
d3.tsv('index.tsv', row, onload);
```
to:
```javascript
d3.csv('index.csv', row, onload);
```


## D3 update

I tried updating my code from the version 3 to version 4. I started with changing:

```html
<script src="https://d3js.org/d3.v3.min.js"></script>
```

to

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
```

After that the console went pretty annoying about the change from v3 to v4., so I went to Google for help. I found out that there were some (good) code changes. Everything is way shorter now. I changed:

```javascript
/* Scales and axes. */
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```

to:

```javascript
/* Scales and axes. */
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);
```

The CSS file also where somewhat buggy. I've fixed the indenting and the missing code. See here below:

```css
body{
 margin: 0}

svg {
  width: 100w;
  height: 100h;
}

.axis path {
  fill: no;
```
to:

```css
body {
 margin: 0;
}

svg {
  width: 100vw;
  height: 100vh;
}

.axis path {
  fill: none;
```

## License

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png
