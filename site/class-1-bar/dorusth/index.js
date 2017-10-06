// Het origineel: https://bl.ocks.org/mbostock/3885304 door Mike Bostock

//selecteert het svg element in de html
var svg = d3.select("svg"),
	//maakt de marign waardees aan
    margin = {top: 20, right: 20, bottom: 30, left: 40},

	//stelt de het formaat van de grafiek aan dmv de margins en de grote van het svg "canvas"
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;


var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);


var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//laad de tsv met data in
d3.tsv("data.tsv", function(d) {
  d.mb = +d.mb;
  return d;
}, function(error, data) {
  if (error) throw error;

  //uit de tsv worden de hoogse waarde van beiden rijen gehaald om de waardes op de as te bepalen
  x.domain(data.map(function(d) { return d.app; }));
  y.domain([0, d3.max(data, function(d) { return d.mb; })]);

//er wordt een svg aangemaakt voor de X-as
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

//er wordt een svg aangemaakt voor de Y-as
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(20, ""))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("mb");

//er wordt een groep aangemaakt voor de bars van de grafiek
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.app); })
      .attr("y", function(d) { return y(d.mb); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.mb); });
});
