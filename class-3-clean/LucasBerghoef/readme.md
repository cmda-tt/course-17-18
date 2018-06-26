# Class 3: Clean

For this assignment I had to load, clean, and transform data so it can be used in a line chart.

## How I cleaned the data

I cleaned the data by first making sure the data was being recognised and parsed correctly with:
```js
 .mimeType('text/plain;charset=iso88591')
```

Then defining the beginning of the useful data:
```js
 var header = doc.indexOf('STN,YYYYMMDD');
```

Removing all spaces:
```js
 doc = doc.slice(end).trim();
```

Defining the right time parsing:
```js
var parseTime = d3.timeParse("%Y%m%dT%H:%M:%S.%LZ");
```

Placing the rows in a group when the temperature (colom 7) isnt empty:
```js
var data = d3.csvParseRows(doc, (d) => {
            if (d[7]) { // Als de temperatuur waarde niet leeg is
                return { // Creeer een object met relevante gegevens voor de grafiek
                    name: knmiCodes[d[0]], // Gebruik de code om de plaatsnaam op te halen
                    date: parseTime((d[1].concat('T', d[2], ':00:00.000Z'))), // Voeg datum en uren samen, parse vervolgens de tijd
                    temperature: parseFloat(d[7] / 10) // Deel de temperatuur door 10 en maak er een nummer van (met decimalen)
                   }
            }
            
            return; // Sla de rij anders over
```

Then placing the results in a var called places:
```js
       var places = d3.nest() // Deel de gegevens uit data in per stad
            .key(d => d.name) // Gebruik de naam van de stad om de rijen van elkaar te onderscheiden
            .entries(data) // Gebruik de waardes opgeslagen in 'data'
            .map(d => ({ // Loop door data en plaats overeenkomende rijen in de juiste stad
                name: d.key,
                values: d.values
            }));
```

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.extent`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.text`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleTime`, `d3.scaleLinear`, `d3.scaleOrdinal`, and
    `d3.schemeCategory10`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.line` and `d3.curveBasis`
    — Graphical primitives

## License

MIT © Lucas Berghoef
