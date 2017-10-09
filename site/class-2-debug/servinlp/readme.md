## Debug

### Changes
`d3.tsv('index.tsv', row, onload)` =>
```javascript
d3.csv( 'index.csv' )
	.row( row )
	.get( onload )
```

`width = 960 - margin.l - margin.r,` => `width = 960 - margin.left - margin.right,`
`height = 500 - margin.t - margin.b,` => `height = 500 - margin.top - margin.bottom,`

`margin.l + width + margin.r,` => `margin.left + width + margin.right,`
`margin.t + height + margin.b` => `margin.top + height + margin.bottom`

`.attr( 'transform', 'translate( ' + margin.l + ',' + margin.t + ' )' )` => `.attr( 'transform', 'translate( ' + margin.left + ',' + margin.top + ' )' )`

`x.domain( d3.extend( data, sepalWidth ) ).nice()` => `x.domain( d3.extent( data, sepalWidth ) ).nice()`
`y.domain( d3.extend( data, sepalLength ) ).nice()` => `y.domain( d3.extent( data, sepalLength ) ).nice()`


```javascript
x = d3.scale.linear().range( [0, width] )
y = d3.scale.linear().range( [height, 0] )
color = d3.scale.ordinal().range( ['#fe2f2f', '#feca2f', '#96fe2f'] )
xAxis = d3.svg.axis().scale( x ).orient( 'bottom' )
yAxis = d3.svg.axis().scale( y ).orient( 'left' )
```

To

```javascript
x = d3.scaleLinear().range( [0, width] ),
y = d3.scaleLinear().range( [height, 0] ),
color = d3.scaleOrdinal().range( ['#fe2f2f', '#feca2f', '#96fe2f'] ),
xAxis = d3.axisBottom( x ),
yAxis = d3.axisLeft( y )
```
