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
  if (error) throw error; // als er een error optreed bij het uitvoeren van de js code, creer dan een error
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