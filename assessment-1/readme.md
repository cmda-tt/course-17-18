# Assessment-1

## Beschrijving
De opdracht houdt in dat je een dataset pakt en die visueel maakt met D3.js

## Structuur
Ik vindt het belangrijk dat er een structuur is die zichzelf uitlegt.

* index.html
* css/style.css
* js/d3.js
* csv/temp-data.csv
* readme.md

## Graph/chart keuze
Aan de hand van mijn dataset (temperatuur) ben ik gaan kijken welke
graph het beste erbij past. Ik kwam uit op de [line chart.] (https://bl.ocks.org/mbostock/3883245). Bij deze keuze was er geen V3, en kon ik alles in V4 aanpassen.

## Debuggen
Ik moest meteen de dataset implementatie veranderen naar mijn bijbehorende dataset.

van
'''
d3.tsv("data.tsv", function(d) {
d.date = parseTime(d.date);
d.close = +d.close;
return d;
}, function(error, data) {
if (error) throw error;
'''
naar

'''
d3.csv("temp-data.csv", function(d) {
d.date = parseTime(d.date); // parse de tijd van date.
d.temp = +d.temp; // parse de tijd van date.
console.log(d); // een kleine console log om te kijken wat hij met de data doet.
return d;
}, function(error, data) { // handeld errors af.
if (error) throw error;
'''

^^^ Hierna kreeg ik errors dat de nummers in mijn dataset NaN waren.

Het lastigste stukje was het vinden van de juiste manier om de datum te parsen.
'''
var parseTime = d3.timeParse("%Y%m%d");
'''

## Bronnen
* https://github.com/d3/d3/blob/master/API.md#time-formats-d3-time-format
* https://stackoverflow.com/questions/39369789/how-to-solve-typeerror-d3-time-is-undefined
* https://bl.ocks.org/mbostock/3883245
* https://github.com/d3/d3-dsv
* https://github.com/d3/d3-time-format
* https://github.com/d3/d3-time-format/blob/master/README.md#timeParse

## Features
* d3-dsv - parse tab-separated values
* d3-time-format - date parsing and formatting
* d3-scale - position encodings
* d3-array - data processing
* d3-axis - axes
* d3-shape - lines

MIT Sam Guliker
