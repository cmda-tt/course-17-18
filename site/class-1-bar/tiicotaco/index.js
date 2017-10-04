//Speelveld aanmaken voor barchart
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//In welke format moet de data worden gelezen?
var formatPercent = d3.format(".60");

//De X-as word geschaald, eerste waarde margin left van X-as, tweede waarde dat koppel je de eerder gemaakte width var aan, derde is margin tussen bars.
var x = d3.scale.ordinal()
    .rangeRoundBands([1, width], .10);

// De Y-as word hier geschaald, je roept de eerder gemaakte height op om een gebied aan te geven
var y = d3.scale.linear()
    .range([height, 0]);

// X-as labels margins
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

// Y-as labels margin 
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

//Hover informatie inladen en <strong> element aanmaken 
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>slaap:</strong> <span>" + d.slaap + "</span>";
  })


// Plaats een SVG element in de body.
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Hover informatie toevoegen
svg.call(tip);

//Data uit TSV bestand halen 
d3.tsv("data.tsv", type, function(error, data) {


//X data is de datum, y data is slaap.
  x.domain(data.map(function(d) { return d.datum; }));
  y.domain([0, d3.max(data, function(d) { return d.slaap; })]);

// Laadt de X-as labels in
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

// Laadt de Y-as labels in
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("slaap");

//Select CSS class .bar en hang daar vervolgens de volgende attributen aan
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.datum); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.slaap); })
      .attr("height", function(d) { return height - y(d.slaap); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

// In deze functie laat jealles in
function type(d) {
  d.slaap = +d.slaap;
  return d;
}
