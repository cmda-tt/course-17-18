// Original file https://bl.ocks.org/mbostock/3885304
// (1) margin convention (https://gist.github.com/mbostock/3019563)
// (2) scales and bandwidth (http://d3indepth.com/scales/)

// Selecteer het svg element
var svg = d3.select("svg");

// Bepaal de margins aan alle kanten (1)
var margin = {top: 20, right: 20, bottom: 30, left: 40};

// Bepaal de breedte en hoogte van de svg en haal de margins eraf, zodat je alleen de binnenkant hebt (1)
var width = +svg.attr("width") - margin.left - margin.right;
var height = +svg.attr("height") - margin.top - margin.bottom;

// Voeg soorten assen toe (2)
var x = d3.scaleBand().rangeRound([0, width]);
var y = d3.scaleLinear().rangeRound([height, 0]);

/*
Maak een groep aan en voeg die toe aan het svg element
Zet de svg terug op zijn plek nadat er margins zijn toegevoegd. (1)
*/
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Laad de data (tab separated values)
d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency || 0;
  return d;
}, function(error, data) {
  if (error) throw error;

  // haal alle data voor de x ass op en map die
  x.domain(data.map(function(d) { return d.letter; }));
  // bekijk hoeveel datapuntent er zijn voor de y as om de hoogte te berekenen
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  // Voeg attributen toe an de x as
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Voeg attributen toe aan de y as
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  // Selecteer alle bars en voeg de data toe.
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      // bepaal de breedte van elk element met de bandwidth function (2)
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
});
