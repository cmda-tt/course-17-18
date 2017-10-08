# Debug
In deze opdracht heb ik foutieve code weer juist gemaakt.

## HTML
In de console kreeg ik als eerste deze foutmelding ```Failed to load resource: the server responded with a status of 404 (Not Found)```
Dit gold voor deze bestanden ```index.css``` en ```index.js```  Vervolgens heb ik  ```../``` verwijderd en ```''``` toegevoegd in HTML.

## JavaScript
Als eerst heb ik de beautify tool van brackets gebruikt. Deze heeft de code mooi en netjes onder elkaar gezet. Vervolgens zag ik dat de woorden niet afgemaakt waren 

```Oud
    var margin = {top: 48, right: 48, bottom: 48, left: 48};
  var width = 960 - margin.l - margin.r;
  var height = 500 - margin.t - margin.b;
  //Later in the code
  var svg = d3
  .select('svg')
  .attr('viewBox', [
    0,
    0,
    margin.l + width + margin.r,
    margin.t + height + margin.b
  ].join(' '))
  .append('g')
  .attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');
```

```Nieuw
    var
    margin = {top: 48, right: 48, bottom: 48, left: 48},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom
  //Later in the code
  var svg = d3
    .select('svg')
    .attr('viewBox', [
      0,
      0,
      margin.left + width + margin.right,
      margin.top + height + margin.bottom
    ].join(' '))
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');  
```
Daarna had ik nog een foutmelding over ```Uncaught TypeError: d3.extend is not a function``` Ik had de foutcode gekopieerd en in google geplakt om te kijken wat daar uit kwam. Al snel kwam ik er achter dat het niet ```extend``` moet zijn maar ```extent``` . Toen ik dit had aangepast kreeg ik mijn grafiek te zien en waren de foutmeldingen weg.

Bron Extend naar Extent -> [`http://bl.ocks.org/aaizemberg/f2eadcea50ec78f43662`]
