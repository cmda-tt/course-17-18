var svg = d3.select("svg"),
    margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

/*
The variable being declared is given a value on line 1.

Voordat je elementen in d3 kan wijzigen of veranderen, moet je ze eerst selecteren.
Dat kan je doen door d3.select(this) of d3.selectAll(this) te gebruiken,
waarbij "this" het specifieke element is dat je wilt selecteren.
*/

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

    //var y = d3.scaleLinear() creates a linear scale.
    //D3 scales are functions whose parameters you define.
    //In JavaScript kunnen variabelen functies opslaan/bewaren. Zie line 12 en 13.

    /*
    Gebruik rangeRound() in plaats van range() om de output waarden
    af te ronden op het dichtstbijzijnde hele getal.
    Bron: http://alignedleft.com/tutorials/d3/scales
    */

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*
.attr() is used to change an element's attributes. Attributes such as
an SVG element's size or position can be changed with .attr()
*/

/*
.attr() requires it be given two values: The attribute to be changed,
and the new value for the specified attribute. For example:
selection.attr("attribute string", new value)

Bron: https://website.education.wisc.edu/~swu28/d3t/concept.html
*/

d3.tsv("data.tsv", function(d) {
  d.steps = +d.steps;
  return d;
}, function(error, data) {
  if (error) throw error;
  //load data file into script?

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.steps; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

//Gebruik .append() om een element toe te voegen.

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "#"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("steps");

      //"%" wordt "#" om er een numerieke waarde van te maken.

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(d.steps); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.steps); });
});
