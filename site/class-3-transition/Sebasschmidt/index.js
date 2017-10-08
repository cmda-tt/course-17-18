//original chart made by Mike Bostock: https://bl.ocks.org/mbostock/6fead6d1378d6df5ae77bb6a719afcb2
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("d3-scale")) :
  typeof define === "function" && define.amd ? define(["exports", "d3-scale"], factory) :
  (factory(global.d3 = global.d3 || {}, global.d3));
}(this, function(exports, d3Scale) {
  'use strict';

  function square(x) {
    return x * x;
  }

  function radial() {
    var linear = d3Scale.scaleLinear();

    function scale(x) {
      return Math.sqrt(linear(x));
    }

    scale.domain = function(_) {
      return arguments.length ? (linear.domain(_), scale) : linear.domain();
    };

    scale.nice = function(count) {
      return (linear.nice(count), scale);
    };

    scale.range = function(_) {
      return arguments.length ? (linear.range(_.map(square)), scale) : linear.range().map(Math.sqrt);
    };

    scale.ticks = linear.ticks;
    scale.tickFormat = linear.tickFormat;

    return scale;
  }

  exports.scaleRadial = radial;

  Object.defineProperty(exports, '__esModule', {value: true});
}));




//hier in werken.
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    innerRadius = 130,
    outerRadius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var x = d3.scaleBand()
    .range([0, 2 * Math.PI])
    .align(0);

var y = d3.scaleRadial()
    .range([innerRadius, outerRadius]);

var z = d3.scaleOrdinal()
    .range(["#c5deff", "#a7a3ff", "#deafff", "#6b486b", "#a05d56", "#ff914d", "#ff8000"]);

d3.csv("index.csv", function(d, i, columns) {
  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
  d.total = t;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.State; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);
  z.domain(data.columns.slice(1));



  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(data.columns.slice(1))(data))
    .enter().append("g")
     //attribute met class meegegeven omdat alles g heet. Zo kan ik de bar apart aanroepen.
      .attr("class", "test")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("path")
    .data(function(d) { return d; })
    .enter().append("path")
      .attr("d", d3.arc()
          .innerRadius(function(d) { return y(d[0]); })
          .outerRadius(function(d) { return y(d[1]); })
          .startAngle(function(d) { return x(d.data.State); })
          .endAngle(function(d) { return x(d.data.State) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius));



  var label = g.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) { return "rotate(" + ((x(d.State) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + innerRadius + ",0)"; });




// streepjes die aan binnenste cirkel staan
  label.append("line")
      .attr("x2", -5)
      .attr("stroke", "white");

  label.append("text")
      .attr("transform", function(d) { return (x(d.State) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
      .text(function(d) { return d.State; });


  var yAxis = g.append("g")
      .attr("text-anchor", "middle");

  var yTick = yAxis
    .selectAll("g")
    .data(y.ticks(5).slice(1))
    .enter().append("g");


    // transities toegevoegd
  yTick.append("circle")
      .transition().duration(500).style('stroke', '#221a7c') // Fade to cyan.
      .transition().style('stroke', 'cyan')
      .style('stroke-width', 2)
      .ease(d3.easeExp)
      .duration(2500)
      .attr("fill", "none")
      .attr("r", y);



  yTick.append("text")
    .transition().duration(1500).style('fill', 'cyan')
      .attr("y", function(d) { return -y(d); })
      .attr("dy", "1em")
      .attr("fill", "#ffffff")
      .attr("stroke", "none")
      .attr("stroke-width", 1)
      .text(y.tickFormat(5, "s"));

  yTick.append("text")
        .transition().duration(1500).style('fill', 'cyan')
      .attr("y", function(d) { return -y(d); });


  yAxis.append("text")
      .transition().duration(1500).style('fill', 'cyan')
      .attr("y", function(d) { return -y(y.ticks(5).pop()); })
      .attr("dy", "-2em")
      .text("Population");

  var legend = g.append("g")
    .selectAll("g")
    .data(data.columns.slice(1).reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(-40," + (i - (data.columns.length - 1) / 2) * 20 + ")"; });

  legend.append("rect")
      .transition() // Fade…
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", z);

  legend.append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", "0.35em")
      .text(function(d) { return d; });

//transitie aanroepen voor de bars
    d3.selectAll(".test").transition(2500)
    .duration(1500);

});


