# Clean code
Dit document verklaard mijn process tijdens de opdracht.

![Alt text][cover]


## Proces
Voor de opdracht moet ik de code inladen, schoonmaken(het bruikbaar maken voor de visualisatie), en het visueel werkend krijgen.


## Datassets:
* 260 De Bilt
* 283 Hupsel
* 285 Huibertgat
* 310 Vlissingen

## Wat heb ik gedaan?
Ik begon vanuit de slides, dit was simpel todat je merkt dat je meer moet doen dan alleen de slides volgen. Vervolgens ben ik het stap voor stap te werk gegaan. Eerst wilde ik het document schoon maken.

Eerst slice ik de header eruit, vervolgens vervang ik de # met geen content. Trim zorgt ervoor dat de overbodige ruimte weg gaat.
Met replace vervang ik de overbodige informatie.
Parste time functie zorg ik ervoor dat het op de juiste manier de datum wordt opgenomen.

```JavaScript
var header = doc.indexOf('STN,YYYYMMDD')
var end = doc.indexOf('\n', header)

  doc = doc.slice(end).trim()
  doc = doc.replace('#', '')
  doc = doc.trim()
  doc = doc.replace(/ +/g, '')

var parseTime = d3.timeParse("%Y%m%dT%H:%M:%S.%LZ")
```
Met daarna was ik de weg kwijt en ben ik online bij de frontend groep gaan kijken. De map functie zorgt ervoor dat de juiste data gereturned wordt. Om de juiste value bij date te krijgen maak ik gebruik van parseTime en zeg ik welke kolommen samen gevoegd moeten worden met concat. Met number forceer je de data naar nummers toe.


```JavaScript
function map(d) {
    if(d[7] == '') { return }
    return {
      date: parseTime((d[1].concat('T', d[2], ':00:00.000Z'))),
      temperature: (Number(d[7])/10),
      name: knmiCodes[d[0]]
    }
}
```

Places zorgt ervoor dat de key data wordt genest (date,temperature , en name.). De map functie zorgt dat elke place meerdere values terug krijgt. In dit geval date, temperature en name.
```JavaScript
places = d3.nest()
    .key(function(d) {
        return d.name;
    })
    .entries(places)
    .map(function(group) {
        return {
            name: group.key,
            values: group.values
        }
    });
```
## Features:
* [ParseRows](https://github.com/d3/d3-dsv#csvParseRows)
* [timeParse](https://github.com/d3/d3-time-format#timeParse)
* [nest](https://github.com/d3/d3-collection/blob/master/README.md#nest)

## Bronnen:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://github.com/d3/d3-collection
Bronnen voor de Datasets: KNMI

## License:
GPL-3.0 © Sam Guliker

[cover]: preview.png
