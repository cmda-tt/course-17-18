# Interactivity
Dit is een bar chart met een sort function. Deze bar chart gaat over winstpercentages van een aantal voetbalclubs die op dit moment spelen in de competitie(12 oktober 2017).
Deze staan nu op een random volgorde gesorteerd maar wanneer je op de checkbox klikt zal er gesorteerd worden op de hoogste winstpercentage naar de laagste.
Je ziet dus welke club de beste winstpercentage heeft en welke club het slechtste.

## Bestanden
Om deze bar chart aan de praat te krijgen heb ik de volgende bestanden gebruikt/gemaakt:
* HTML (index.html)
* Javascript (index.js)
* TSV (data.tsv)
* CSS (index.css)

## Aanpassingen
Hieronder kunt u per bestand zien wat ik heb veranderd.

### HTML
* Alle javascript code weggehaald
* De javascript bestand gelinkt in de html
* Een h1 als titel toegevoegd
* Een body aangemaakt en de svg/javascript hierin gezet
* De title veranderd in RyanNL1994
* Een checkbox toegevoegd zodat deze de function in de javascript triggerd en de grafiek van hoog naar laag gesorteerd kan worden

### Javascript
* Comments toegevoegd zodat ik beter begrijp wat er gebeurd in de code en de proces hiervan
* Code toegevoegd dat wanneer er op de checkbox wordt geklikt er een functie wordt uitgevoerd die de grafiek veranderd naar winstpercentage hoog naar laag.
* Transitions toegevoegd met een easeBack en een duration van 1,5 sec waarbij de kleur ook veranderd in blauw. Dit zit in een function en wordt dus pas getriggerd wanneer er op de checkbox wordt geklikt.

### TSV
* De orginele data heb ik vervangen met data van de winstpercentage van een groep voetbalclubs. Deze winstpercentage heb ik van de volgende site.
https://www.whoscored.com/Statistics/Teams

### CSS
* De background color van de body heb ik veranderd.
* De label heb ik een display block gegeven zodat deze nu boven de svg staat en niet meer ernaast

## Bronnen
Ik heb deze grafiek kunnen maken met dank aan Mike Bostock waarvan ik een groot deel van de code vandaan heb van de grafiek. Deze kan je vinden op de volgende site: https://bl.ocks.org/mbostock/3885304
Ook met dank aan Titus Wormer waar ik de code van heb kunnen inzien voor de sort function via de volgende link: https://cmda-tt.github.io/course-17-18/class-4/sort/
Samen met de slides van class 4.

![Alt text](preview.png)

## Licentie
Released under the GNU General Public License, version 3.
GPL-3.0 © Titus Wormer
