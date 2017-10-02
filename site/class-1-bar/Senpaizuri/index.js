var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40}, //object
    width = +svg.attr("width") - margin.left - margin.right, //Declare width attribute  minus the margins
    height = +svg.attr("height") - margin.top - margin.bottom; //Declare height attribute  minus the margins

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]); //Remapping van values?

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //transform attribute aanpassen op aal G's binnen de SVG

d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency; //chenking for dataset and it's contents d=data
  return d; // return the data
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.letter; })); //Remapping data
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]); //Remapping data

  g.append("g")
      .attr("class", "axis axis--x") // Declaring more attributes
      .attr("transform", "translate(0," + height + ")") //transform onto the G style attribute
      .call(d3.axisBottom(x))
        .append("text") // appending element into G
        .attr("y", "2em")
        .attr("x", "50%")
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Letters <3");

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency <3");

  g.selectAll(".bar")
    .data(data) //Import data to object
    .enter().append("rect") // Append element to dom
      .attr("class", "bar") //Set attributes
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth()) // get the width
      .attr("height", function(d) { return height - y(d.frequency); }) // get the height off elemment according to dataset and calculation
      .attr('style', function(d) { return "animation-delay:"+ x(d.letter)+"ms" })
});
