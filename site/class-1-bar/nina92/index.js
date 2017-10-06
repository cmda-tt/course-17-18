// source: https://bl.ocks.org/mbostock/3885304

// hier worden de variabelen "svg", "margin", "width" en "height" aangemaakt en hier worden waarden aan toegwezen.
var svg = d3.select("svg"), // Hier wordt het element "svg" geselecteerd uit het d3 script
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// hier worden de variabelen "x" en "y" aangemaakt en hier worden waarden aan toegwezen
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1), // hier wordt de schaal van de x-as vastgesteld
    y = d3.scaleLinear().rangeRound([height, 0]); // hier wordt de schaal van de y-as vastgesteld

// hier wordt de variabele "g" aangemaakt waarin het element "g" als een child wordt toegevoegd aan het element "svg"
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // het attribuut "transform" met de waarde "translate" wordt toegevoegd aan het element "g" 

// hier wordt het csv bestand "data.csv" ingeladen
d3.csv("data.csv", function(d) {
  d.percentage = +d.percentage;
  return d;
}, function(error, data) {
  if (error) throw error;

// hier wordt de data bij de x- en y-as gezet
  x.domain(data.map(function(d){ return d.year; }));
  y.domain([0, d3.max(data, function(d) { return d.percentage; })]);

// hier wordt het element "g" als een child toegevoegd aan het element "g"
// hier worden vervolgens attributen aan toegevoegd
// vervolgens wordt de functie "d3.axisBottom" aangeroepen die de x-as genereert op basis van de schaal
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// hier wordt het element "g" als een child toegevoegd aan het element "g"
// hier wordt vervolgens een attribuut aan toegevoegd
// vervolgens wordt de functie "d3.axisLeft" aangeroepen die de y-as genereert op basis van de schaal
// de "ticks" zijn het aantal eenheden die de y-as toont
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))

// hier wordt het element "text" toegevoegd als een child aan het element "g"
// vervolgens worden hier attributen aan toegevoegd
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("percentage");

// hier worden binnen het element "g" alle child elementen met de class "bar" geselecteerd
// vervolgens wordt hier de data aan gekoppeld
// vervolgens wordt deze data gekoppeld aan de "rect" elementen
// hier worden attributen aan toegevoegd
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.year); })
      .attr("y", function(d) { return y(d.percentage); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.percentage); });
});