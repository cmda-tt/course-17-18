# Clean

## Preview
![Alt text][cover]

## Description
I took data from [the KNMI website][knmi] and cleaned it, so it could be used in a graph.

I tused data from the following places:
* Vlieland
* De Bilt
* Hoorn (Terschelling)
* Huibertgat

### Separated files
I have separated the 'css' and 'JavaScript' from the 'HTML' document.

## Background
I added the code below to clean the data. The code has added comments to explain the steps.

```javascript
function onload(err, doc) {
  if (err) throw err;

  var header = doc.indexOf('STN,YYYYMMDD');  // Get indexOf of header row
  var headerEnd = doc.indexOf("\n", header); // get end of header row
  var doc = doc.slice(headerEnd).trim();     // get the part which contains the data
      doc = doc.replace("#","");             // Get rid of the remaining #
      doc= doc.replace(/ +/g, "");           // Remove spaces

  var parseTime = d3.timeParse('%Y%m%d%H');  // parse time format

  var places = d3.csvParseRows(doc, map);

  function map(d) {
    if (d[7] === ""){return}                 // if empty give feedback

    return {                                 // Get data from document
      name: knmiCodes[d[0]],
      date: parseTime(d[1] + d[2]),
      temperature: Number(d[7]/10),
    }
  };
````
## License
GPL-3.0 © Laurens Booij

[knmi]:https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi
[cover]: preview.png
