// code from https://bl.ocks.org/mbostock/3885304

var svg = d3.select("svg"), // selecteer SVG uit DOM
    margin = {top: 20, right: 20, bottom: 30, left: 40}, // maak margin object aan met waardes
    width = +svg.attr("width") - margin.left - margin.right, // maak width op basis van margins
    height = +svg.attr("height") - margin.top - margin.bottom; // maak height op basis van margins

// maak x en y as aan
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

// g element toevoegen aan svg
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// positie van rectangle bepalen op basis van de margins
d3.tsv("data.tsv", function(d) { // laad tsv bestand in
  d.frequency = +d.frequency;
  return d; // return de data uit het bestand
}, function(error, data) {
  if (error) throw error; // error handling

// bereik van x as
  x.domain(data.map(function(d) {
    return d.letter;
  }));

  // bereik van y as
  y.domain([0, d3.max(data, function(d) {
     return d.frequency;
   })]);

// voeg de class toe aan het g element en height attribute, de Y as
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// voeg de class toe aan het g element en height attribute, de X as
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

// de bars in de dom zetten
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
});
