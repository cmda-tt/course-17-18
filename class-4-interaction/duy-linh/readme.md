# Interaction!

## Achtergrond

Dit was een opdracht voor Front-End 3 waarbij we een 'non-trivial interactivity' hebben moeten toevoegen aan een chart.

## Aanpassingen

### index.html
* Javascript en CSS gelinked

### index.js
* Ik heb slechts geprobeerd om de 'sort' code te laten werken

* Daarnaast heb ik een tooltip gemaakt
``` javascript
// +++ Tooltip interactie, Oi heeft mij geholpen met het maken van deze code.
    
// Hier wordt de x en y waarde van een gepakt van de geselecteerde bar.
function mouseOver(d){
var x = this.getAttribute('x');
console.log(this);
var y = this.getAttribute('y');
    
/ Hier wordt een vlak gemaakt, genaamd container, waarop de positie van de tekst komt.
d3.select('.container')
.append('div')
.attr('class', 'tooltip')
.style('left', x+'px')
.style('top', y+'px')
.text((d.frequency*100+'%'));   
}
    
// Wanneer de muis niet meer de bar selecteert, zal de css verwijderd worden    
function mouseOut(d){
d3.selectAll('.tooltip')
.remove();
}

// +++
```

## Data

De chart maakt gebruik van twee data types:

* `frequency` - weergeeft het aantal sprekers, op de y-as.
* `letter` - weergeeft de gesproken taal, op de x-as.

## Licentie

GPL-3.0 © Duy-Linh Pham
