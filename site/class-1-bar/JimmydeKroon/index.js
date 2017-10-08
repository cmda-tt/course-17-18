var svg = d3.select("svg"),

    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
// geeft margins aan de barchart bepaalt de breedte en hoogte

var x = d3.scaleBand().rangeRound([0, width]).padding(0.3),
    y = d3.scaleLinear().rangeRound([height, 0]);
// assen toevoegen met bijbehorende attributen

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// var g maakt een nieuw svg element "g" aan + svg op de juiste plek zetten na toevoegen

d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  if (error) throw error;
// data inladen vanuit data.tsv

  x.domain(data.map(function(d) { return d.letter; }));
// data mappen voor de x as

  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
// geeft de waardes terug voor de y as

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
// voegt een aantal attributen toe voor x

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10,))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Amount (X 1 million)");
// voegt een aantal attributen toe aan y (+ een tekst voor bij y)

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
// koppelt de data aan de verschillende bars
});


// Original work: https://bl.ocks.org/mbostock/3885304 //
