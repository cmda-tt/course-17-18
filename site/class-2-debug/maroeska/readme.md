# Debugging

Bij deze huiswerk opdracht heb ik een gebroken scatter plot gefixt.
___

## Fouten in de code

**CSS**

Code met fout:
```css
svg {
  width: 100w;
  height: 100h;
}
```

Nieuwe code:
```css
svg {
    width: 100vw;
    /* viewport width */
    height: 100vh;
    /* viewport height */
}
```

**JS**

Code met fout:
```javascript
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```

Nieuwe code:
```javascript
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom; // margins uitschrijven
```

Code met fout:
```javascript
    margin.l + width + margin.r,
    margin.t + height + margin.b
```

Nieuwe code:
```javascript
    margin.left + width + margin.right,
    margin.top + height + margin.bottom // margins waren afgekort met 1 letter, moet volledig uitgeschreven worden
```

Oude code:
```javascript
/* Load data. */
d3.tsv('index.tsv', row, onload);
```

Nieuwe code:
```javascript
/* Load data. */
d3.csv('index.csv', row, onload); // data was gekoppeld aan tsv en niet csv
```

Code met fout:
```javascript
/* Handle data. */
function onload(data) {
  x.domain(d3.extend(data, sepalWidth)).nice();
  y.domain(d3.extend(data, sepalLength)).nice();
```

Nieuwe code:
```javascript
/* Handle data. */
function onload(data) {
    x.domain(d3.extent(data, sepalWidth)).nice(); // extent ipv extend
    y.domain(d3.extent(data, sepalLength)).nice();
```    

Oude code:
```javascript
/* Scales and axes. */
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');
```

Nieuwe code:
```javascript
/* Scales and axes. */
var x = d3.scaleLinear().range([0, width]); // geupdate naar d4
var y = d3.scaleLinear().range([height, 0]); // geupdate naar d4
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']); // geupdate naar d4
var xAxis = d3.axisBottom(x); // geupdate naar d4
var yAxis = d3.axisLeft(y); // geupdate naar d4
```
**HTML** link naar d3 ipv d4: <br>
Oude link:
```html
<script src=https://d3js.org/d3.v3.min.js></script>
```

Nieuwe link:
```html
<script src='https://d3js.org/d3.v4.min.js'></script>
```

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License 

GPL-3.0 © Maroeska Verkerk
