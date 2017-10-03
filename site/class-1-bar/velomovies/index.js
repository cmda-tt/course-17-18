//Code van https://bl.ocks.org/mbostock/3885304 door Mike Bostocks

//SVG uit het document halen en hoogte en breedte pakken
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 80, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

//De grootte van de barchart in variabele zetten
var x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height, 0])

//Attributen aan de g in de svg meegeven
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

//Het csv bestand inladen. ()+van de string die d geeft een nummer maken)
d3.csv("index.csv", function(d) {
    d.gezocht = +d.gezocht; return d
}, function(error, data) {
  if (error) throw error

//Het domein/bereik van de barchart aangeven. (Schalen van de barchart)
  x.domain(data.map(function(d) { return d.maand }))
  y.domain([0, d3.max(data, function(d) { return d.gezocht })])

//Een groep in de svg (voor de x-as) attributen mee geven
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("dy", "-0.5em")
      .attr("dx", "-1em")

//Een groep in de svg (voor de y-as) attributen mee geven
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Gezocht")

//De bar van de barchart selecteren en een vorm geven
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.maand) })
      .attr("y", function(d) { return y(d.gezocht) })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.gezocht) })
});
