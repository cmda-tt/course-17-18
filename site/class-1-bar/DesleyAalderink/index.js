// Original Work: https://bl.ocks.org/Caged/6476579

// Je bepaalt de positie van de grafiek
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Je zet het precentage van waar hij moet beginnen en op hoeveel decimaal
var formatPercent = d3.format(".1%");

// Je bepaald de breedte van de gegevens van de grafiek
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .4);

// Je bepaald de hoogte van de gegevens van de grafiek
var y = d3.scale.linear()
    .range([height, 0]);

// Op de X as zet je waar de atributen moeten komen te staan, in dit geval beneden
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

// Op de Y as zet je waar de atributen moeten komen te staan, in dit geval links. Het formaat waar we mee werken is precentage
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

// de atributen geef je een class mee die gestyled wordt, de hoogte van het aantal als je hovered bijv.
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Frequency:</strong> <span style='color:steelblue'>" + d.frequency + "</span>";
  })

// Hier wordt de SVG delen bij elkaar gezet in een geheel
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Je roept de variabele weer op
svg.call(tip);

// Je haalt de data erbij die in het data.tsv file is gezet en je zegt welke waarde waar moet komen in de grafiek
d3.tsv("data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

// Hier wordt de SVG delen bij elkaar gezet in een geheel
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

// Hier wordt de SVG delen bij elkaar gezet in een geheel
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

// op alle SVG bestanden gooi je de class bar en meerdere atributen
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

// Een functie die de uiteindelijke waardes bepaald door ze toe tevoegen en uit te rekenen, de frequency staat in de data.tsv
function type(d) {
  d.frequency = +d.frequency;
  return d;
}
