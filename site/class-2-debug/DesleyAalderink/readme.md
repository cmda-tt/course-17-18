# Bug fixes

A simple responsive scatter plot visualising the dimensions of sepals and petals
of various iris flowers based on a [`bl.ock`][block] by
[**@mbostock**][block-author] (GPL-3.0).

## Background

For this assignment I had to find bug fixes in the JS file. This was sometimes easy and sometimes hard.
I will explain how I did it and what I found.

[![][cover]][url]

## Changing the code

When I was looking at the JS file I noticed something strange.

```javascript
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```
I found it odd that the margin. l was used, because I had never seen it before. Maybe it was a feature of d3?
I went to Google for an answer, but I couldn't find anything about it. That's when I changed it to:

```javascript
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
```

I did the same for everything which contained the margin.l/t/b/r.

In the console log it said something about a `tsv` filed not being linked properly. I searched the files and only saw a `csv` file.
I changed the code from:

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
<script src="https://d3js.org/d3.v3.min.js"></script>
```

My console was being annoying and said some stuff about the linear function, so I went to Google for help.
I found out that there were some (good) code changes. Everything is way shorter now. I changed:


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

The changes made is way easier to read, especially the axis one. I also asked for some help to confirm my code.

The last thing my console was nagging about, was about my extent.
I REALLY couldn't find out what was wrong with it, even when I went to Google.
I tried comparing my code to that of a friend and that's when I found out...it was a grammar error.

I changed:
```javascript
function onload(data) {
  x.domain(d3.extend(data, sepalWidth)).nice();
  y.domain(d3.extend(data, sepalLength)).nice();
```

to:
```javascript
function onload(data) {
  x.domain(d3.extent(data, sepalWidth)).nice();
  y.domain(d3.extent(data, sepalLength)).nice();
```

changing the `t` to a `d`.

After I got the feedback from my teacher, he pointed me out on some easy misstakes which I didn't noticed...
The CSS must me changed as well. I fixed the following:

```css
body {
 margin: 0;
}

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

Original code creator © Titus Wormer
Changes made by  © Desley Aalderink

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/DesleyAalderink
