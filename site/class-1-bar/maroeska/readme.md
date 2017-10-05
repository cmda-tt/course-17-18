# Bar chart 

Dit is de readme voor de barchart van Mike Bostock, waar ik de javascript, css, html, css en tsv bestanden heb aangepast.

___

## Achtergrond

Ik heb een bar chart van de [d3’s example gallery](https://github.com/d3/d3/wiki/Gallery) gehaald uit de [Basic Charts section](https://github.com/d3/d3/wiki/Gallery#basic-charts). Vervolgens heb ik de javascript, css en html gescheiden van elkaar en naar elkaar gelinkt in de html.<br> 
Ik heb de hele code doorlopen en alle termen die ik niet wist, opgezocht. Onder het hoofdstuk 'Features' staan alle termen die ik heb opgezocht en vertaald heb in het Nederlands (dan is het voor mij begrijpelijker). Nadat ik de termen in javascript regel voor regel heb opgezocht, heb ik in de code veranderingen gemaakt. Ik heb kleine aanpassingen gedaan en elke regel opgebroken, om te kijken wat er veranderd werd. Vervolgens heb ik de data nog aangepast naar mijn eigen data: 
Hoeveel uur ik heb geslapen in de week van 11-17 september. Ook heb ik de CSS een beetje veranderd.

## Data
```javascript
var svg = d3.select("svg"), // selecteert de svg, we kunnen nu deze svg bewerken
    margin = {top: 100, right: 20, bottom: 30, left: 100}, // margins worden bepaald
    width = +svg.attr("width") - margin.left - margin.right, // een width wordt toegevoegd aan de svg toegevoegd en de margin left en right worden eraf gehaald
    height = +svg.attr("height") - margin.top - margin.bottom; // een hight wordt toegevoegd aan de svg en de margin top en bottom worden eraf gehaald

var xAs = d3.scaleBand().rangeRound([0, width]).padding(0.5), // nieuwe bandschaal, eenheid is 0 , padding is de dikte van de staafjes
    yAs = d3.scaleLinear().rangeRound([height, 0]); // hoogte wordt lineair geschaald

var g = svg.append("g") // groepeert de SVG shapes samen tot 1 geheel
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //

d3.tsv("data.tsv", function(d) { // de data van het tsv wordt in een functie gezet met een d
  d.frequency = +d.frequency;
  return d; // geeft de data terug
}, function(error, data) {
  if (error) throw error; // als er een error optreed bij het uitvoeren van de js code, creer dan een error<br>
// deze code wordt uitgevoerd wanneer het bestand data.tsv is geladen
  xAs.domain(data.map(function(d) { return d.letter; })); // map: de data wordt dorft omgezet in nieuwe elementen? return: waarde terug geven in een functie, in dit geval de letters uit de dataset
  yAs.domain([0, d3.max(data, function(d) { return d.frequency; })]); // max: geeft de maximale waarde terug uit de data, in dit geval 0,12?

  g.append("g") // voegt inhoud toe aan het einde van de gegroepeerde svg
      .attr("class", "axis axis--x") // x-as
      .attr("transform", "translate(0," + height + ")") // 0 zorgt ervoor dat het streepje in het midden van de balk blijft
      .call(d3.axisBottom(xAs)); // .call roept de d3.axisBottom op die x als parameter heeft. Deze heeft lege tick argumenten en wordt onder de horizontale domain path getekend.

  g.append("g")
      .attr("class", "axis axis--y") // y-as
      .call(d3.axisLeft(yAs).ticks(20,)) // linker lijn op de y-as met ticks van van 10
    .append("text") // tekst aan de y-as
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em") // 0.71em verschuiving op de y-as
      .attr("text-anchor", "end")
      .text("Frequency"); // frequency wordt als tekst weergeven

  g.selectAll(".bar") // data per element invoeren
    .data(data) // pakt alle data
    .enter().append("rect") // voert een rectangle in de groep voor elk stukje data?
      .attr("class", "bar") // class gemaakt voor bar, in css kan je bijvoorbeeld de kleur met deze class aanpassen
      .attr("x", function(d) { return xAs(d.letter); }) // letters krijg je terug
      .attr("y", function(d) { return yAs(d.frequency); }) // cijfers krijg je terug
      .attr("width", xAs.bandwidth())
      .attr("height", function(d) { return height - yAs(d.frequency); });
});
```
## Features

Kenmerken van D3 die ik ben tegen gekomen en heb opgezocht:

**forEach()** methode roept een voorziene functie 1 keer voor elk element in een array, in volgorde

**d3.select** geeft huidige selectie terug, of een nieuwe selectie. Je kan zo’n selectie meerdere operations geven (bewerkingen). Bijvoorbeeld: class veranderen of kleur style, of paragrafen (p) instellen in het document.

**attr()** stelt eigenschappen (attribute) en waardes (values) in of geeft het terug van de geselecteerde elementen.
Bij return wordt de waarde van het eerste aangepaste element teruggegeven. 
Bij set stelt het een of meer attributen/waarden in van gelijke elementen.

**d3.scaleBand** vormt een nieuwe bandschaal met het lege domein, de eenheid vorming [0, 1], geen padding, geen afronding en center alignment.

**d3.rangeBound** stelt het bereik van de schaal in op de opgegeven twee-elementen array van nummers, terwijl ook afronding mogelijk wordt gemaakt. 

**d3.scaleLineair** vormt een nieuwe continue schaal met de eenheid domein [0, 1], het bereik van de eenheid [0, 1].

**.append** voegt de opgegeven inhoud toe aan het einde van de geselecteerde elementen.
.prepend gebruik je om de inhoud aan het begin van de geselecteerde elementen in te voegen.

‘**g**’ element groepeert SVG shapes samen. Het is geen d3 specifieke term.

**transform**(CSS): 2D of 3D transformaties toevoegen aan een element. Bijvoorbeeld, rotate, scale, move, skew etc. elementen.

**translate**(CSS): herstelt de (0,0) positie op het canvas. Je kan hier de positie mee veranderen.

**(d)** staat voor de data die is gekoppeld aan een bepaalde selectie.

**frequentie**: bij een periodiek verschijnsel geeft de frequentie aan hoe vaak het verschijnsel voorkomt in een bepaalde tijdseenheid.

**throw** statement laat je aangepaste fouten creëren als programmeur.

**catch** statement laat je de fout verwerken als programmeur.

**errors** kunnen gecodeerde errors zijn die gemaakt zijn door de programmeur, zij kunnen het gevolg zijn van verkeerde invoer of andere onvoorziene zaken. 

**return** statement stopt de uitvoering van een functie en geeft een waarde terug van die functie.

**map** doorkruist de array van links naar rechts in, waarbij een callback (terugroep)functie op elk element wordt toegepast met parameters. Voor elke callback wordt de teruggegeven value een nieuw element in de nieuwe array. Nadat alle elementen zijn doorkruist map() geeft de nieuwe array alle vertaalde elementen terug.

**d3.max** geeft de maximale waarde terug in het gegeven array met behulp van de natuurlijke volgorde. Als de array leeg is, keert het ongedefinieerd (undefined) terug. Een optionele accessor (toegangsfunctie) kan worden opgegeven, die gelijk is aan het oproepen van array.map (accessor) voordat je de maximale waarde berekent. 

**axis** is de referentie schaal die overeenkomt met welke diagrammen zijn getekend. CanvasJS ondersteunt 4 assen types: primaire x-as, secundaire x-as, primaire y-as en secundaire y-as.
axis heeft een path element met de class ‘domain’, gevolgd door getransformeerde g elementen van class ‘tick’. Elke tick heeft een line element, om de tick line te tekenen en een text element voor de tick label.

**.call** wordt gebruikt om een functie aan te roepen met een eigen object als het eerste argument (parameter)

**d3.axisBottom** construeert een nieuwe bodemgeoriënteerde asgenerator voor de gegeven schaal, met lege tick argumenten, een tick grootte van 6 en een padding van 3. In deze oriëntatie worden ticks onder de horizontale domain path getekend.

**d3.axisLeft** construeert een nieuwe linker-georienteerde asgenerator voor de gegeven schaal, met lege tick argumenten, een tick grootte van 6 en een padding van 3. In deze oriëntatie worden ticks links van het verticale domain path getrokken.

**dy**-attribuut geeft een verschuiving aan langs de y-as op de positie van een element of de inhoud ervan. Wat er exact verschuift hangt af van het element waarvoor dit attribuut is ingesteld.

**text-anchor** wordt gebruikt om een tekenreeks van een bepaald punt in te stellen (begin-, midden- of eind-alignment).

**.data** koppelt data van elk type aan DOM-elementen.

**bandwith** geeft de breedte van elke band weer.

Informatie bronnen:

https://stackoverflow.com > diverse vragen van mensen gelezen<br>
https://github.com/d3/d3-array > veel informatie gehaald over D3<br>
https://developer.mozilla.org/nl/ > informatie gezocht over D3 en errors<br>
https://developer.mozilla.org/nl/ > informatie gezocht over CSS en JS<br> 
https://medium.com/@nick3499/d3-scaleband-rangeround-padding-ordinal-scale-with-range-bands-including-padding-f4af1e3c96ab > informatie gezocht over .Scaleband

## License

GPL-3.0 © Maroeska Verkerk

