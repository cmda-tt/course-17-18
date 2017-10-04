# Debug Assignment

For this assignment I first debugged the two errors that my console.log showed by linking correctly to my js. and css. file.

## The errors I fixed.

### The first error i fixed

old:
```js
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;
```

To:
```js
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
```

### The second error i fixed

old:
```js
d3.tsv('index.tsv', row, onload);
```

To:
```js
d3.csv('index.csv', row, onload);
```
Because we are not working with a tsv file but with a csv file. With index.csv i selected my csv file i made.

### The third error i fixed:

```js
x.domain(d3.extend(data, sepalWidth)).nice();
y.domain(d3.extend(data, sepalLength)).nice();
``` 
and i changed extent to extent
    

### The fourth error i fixed

old:
```js
<script src=https://d3js.org/d3.v3.min.js></script>
```

To:
```js
<script src=https://d3js.org/d3.v4.min.js></script>
```
I hereby upgraded to d3@4. And because i did so i changed another thing in my code. Because i'm now working with d3@4 i deleted the . scale.linear and scale.ordinal and changed it to:

```js
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
```


## Preview
![preview](debug.png)


## License

MIT @ Björn Völkers

