### Clean

Places
 - Maastricht
 - Schiphol
 - De Bilt
 - Huibertgat

First the header of the file and all spaces are removed.

```javascript
const headerEnd = doc.indexOf( '\n', doc.lastIndexOf( '#' ) ),
	remains = doc.slice( headerEnd ).trim(),
	docs = remains.replace( / +/g, '' )
```

We turn it into CSV with `csv = d3.csvParseRows( docs )` and set the time parser with `timeFormat = d3.timeParse( '%Y%m%d%H' )`.

We put the information we need into objects.
`let places = csv.map( el => ( { name: knmiCodes[ el[0] ], date: timeFormat( el[1] + el[2] ), temperature: ( el[7] * 0.1 ).toFixed( 1 ) * 1 } ) )`

And with the help of d3 new nest operator we set it the way we want it.
```javascript
places = d3.nest()
	.key( d => d.name )
	.entries( places )
	.map( d => ( { name: d.key, values: d.values } ) )
```
