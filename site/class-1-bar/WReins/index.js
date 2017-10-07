/*    Original Work by Mike Bostock
    Source: https://bl.ocks.org/mbostock/3885304*/

/* Selecteer SVG-element and stop het in var svg*/
var svg = d3.select("svg");

/*Er wordt een object met marges aangemaakt en opgeslagen in var margin.
Deze marges bepalen straks hoeveel ruimte er voor de grafiek is in het svg element*/
var margin = {top: 20, right: 20, bottom: 30, left: 40};

/*De marges voor links en rechts bepalen hoeveel ruimte er aan de zijkanten van de grafiek overblijft. Dit is voor de waarden op de y as. Hetzelfde geldt voor de height op de x as.*/
var width = +svg.attr("width") - margin.left - margin.right;
var height = +svg.attr("height") - margin.top - margin.bottom;

/*scaleBand en scaleLinear bepalen straks hoe de x en y as gepositioneerd worden. Ze worden opgeslagen in var x en y.*/
var x = d3.scaleBand().rangeRound([0, width]).padding(0.5),
    y = d3.scaleLinear().rangeRound([height, 0]);

/*Er wordt een group aan het svg element vastgemaakt. In deze 'g' kunnen allemaal svg attributes en styles gehangen worden. Zo is de grafiek makkelijk aan te passen en uit te breiden.*/
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*De data uit het csv bestand met de waarden voor de grafiek wordt ingeladen.*/
d3.csv("data.csv", function(d) {
  d.uren = +d.uren;
  return d;
}, function(error, data) {
  if (error) throw error;

/*De data wordt gemapt op de x en de y assen. Aan x worden de dagwaarden toegekend. Aan y worden de uurwaarden toegekend*/
  x.domain(data.map(function(d) { return d.dag; }));
  y.domain([0, d3.max(data, function(d) { return d.uren; })]);

/*Nu is het tijd om de grafiek te vullen en dingen aan de var g te hangen. Dit is dus voor het svg element*/
  g.append("g")
      .attr("class", "axis axis--x") //Classes toekennen om de x as te stylen
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)); //d3 functie voor de x as wordt gecalld

  g.append("g")
      .attr("class", "axis axis--y") //Classes toekennen om de y as te stylen
      .call(d3.axisLeft(y).ticks(10, "h")) //d3 functie voor de x as wordt gecalld en er worden 10 stappen aan toegevoegd
    .append("text")
      .attr("transform", "rotate(-90)") //y as verticaal draaien
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Uren");

  g.selectAll(".bar") //Bar classes worden geselecteerd
    .data(data) //De data wordt ingeladen voor de bars
    .enter().append("rect") //Er worden rects toegevoegd aan de waarden van de data
      .attr("class", "bar") //bar class wordt toegevoegd voor styling
      .attr("x", function(d) { return x(d.dag); }) //Alle waarden uit de data worden aan de x as toegevoegd. In dit geval de dagen
      .attr("y", function(d) { return y(d.uren); })//Alle waarden uit de data worden aan de y as toegevoegd. In dit geval de uren
      .attr("width", x.bandwidth()) //Langs de x as krijgen de bars hun breedte
      .attr("height", function(d) { return height - y(d.uren); }); //De hoogte van de bars wordt bepaald door de hoogte van het svg element minus het verschil van de data van het betreffende rect
});
