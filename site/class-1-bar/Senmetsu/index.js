//Selecteert de SVG.
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// Scaleband + rangeRound is de bar zelf, en je geeft een gutter van 0.1
// ScaleLinear zorgt ervoor dat er een nieuwe schaal wordt aangemaakt.

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

// g wordt aan de svg gekoppeld en worden attributen meegegeven.
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//D3.tsv zorgt ervoor dat er data wordt ingeladen.
d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  if (error) throw error;

  // Data geeft ie terug in een array en stopt hij bij de d.frequency(data.tsv).
  x.domain(data.map(function(d) { return d.letter; }));

  // laadt de max waarde in van de frequency
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

 // Plaatst het variaele G in een groep met de onderstaande attributen
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


   // Plaatst het variaele G in een groep met de onderstaande attributen
  g.append("g")
      .attr("class", "axis axis--y")
      // berekend het aantal stappen op de y ass in percentages
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0")
      .attr("text-anchor", "end")
      .text("Frequency");

   // Plaatst het variaele G in een groep met de onderstaande attributen
  g.selectAll(".bar")
    //laad de data in.
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
     //plaatst alle data met header letter op de x as
      .attr("x", function(d) { return x(d.letter); })
      //plaatst alle data met header letter op de y as
      .attr("y", function(d) { return y(d.frequency); })
      // Alle elementen met de klas .bar krijgen de width van de x as.
      .attr("width", x.bandwidth())
      // Alle elementen met de klas .bar krijgen de height van de y as.
      .attr("height", function(d) { return height - y(d.frequency); });
});
