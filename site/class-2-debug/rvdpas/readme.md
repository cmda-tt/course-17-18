# Class 2 - Debug

## Description
In this assigment I had to fix multiple errors in the html, css and javascript to create a scatter plot.

## Fixes

### Changed d3.tsv to d3.csv in index.js

```
d3.tsv('index.tsv', row, onload);

And I changed it to:

d3.csv('index.csv', row, onload);

```

### Changed margin.t to margin.top 

```
var width = 960 - margin.l - margin.r;

And I changed it to:

var width = 960 - margin.left - margin.right;
```

### Updated css
```
svg {
  width: 100w;
  height: 100h;
}

And I changed it to:

svg {
  width: 100vw;
  height: 100vh;
}

```

### V3 to V4
first changed the script tag in the index.html

```
<script src=https://d3js.org/d3.v3.min.js></script>

And I changed it to:

<script src=https://d3js.org/d3.v4.min.js></script>

```
Then I changed the scale notation
```
d3.scale.ordinal()

changes to:

d3.scaleOrdinal()

```

And I changed the notation here as well
```
d3.svg.axis().scale(x).orient('bottom')

The same for this one

d3.axisBottom(x);
```
