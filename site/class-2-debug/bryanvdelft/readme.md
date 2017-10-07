# Debugger

## Steps

## Step 1 
I changed the: 

`d3.tsv('index.tsv', row, onload);`

to 

`d3.csv('index.csv', row, onload);`

## Step 2 
I changed the 

V3 script `<script src="https://d3js.org/d3.v3.min.js">` 
    
to 

the V4 script `<script src="https://d3js.org/d3.v4.min.js">`
    
## Step 3
I changed every 

`margin.l - margin.r - margin.t - margin.b` 

to 

`margin.length - margin.right - margin.top - margin.bottom.`

## Step 4
I changed the 

`d3.extend`

to 

`d3.extent`

## Step 5 
Then I changed 

`var xAxis = d3.svg.axis().scale(x).orient("bottom"); 
var yAxis = d3.svg.axis().scale(y).orient("left");`

to

`var xAxis = d3.axisBottom(x); 
var yAxis = d3.axisLeft(y);`

## Step 6
The last thing I changed was

`d3.scale.linear
d3.scale.ordinal` 

to 

`d3.scaleLinear
d3.scaleOrdinal`

