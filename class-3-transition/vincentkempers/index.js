// Made By: Mike Bostock https://github.com/mbostock
// Based on: https://bl.ocks.org/mbostock/4063269

var svg = d3.select('svg'),
    width = +svg.attr('width'),
    height = +svg.attr('height');

var format = d3.format(',d');

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);


// Load the Data
d3.csv('data.csv', function(d) {
  d.value = +d.value;
  if (d.value) return d;
}, function(error, classes) {
  if (error) throw error;

/*
  The variable root adds structure to make clusters possible. Everytime you have a new cluster it slices the data.
  d.id is the whole data "string" it sets it to id. to make an unique id foor that circle later.
  d.package is the cluster so it can make that one color. Or a lighter color if you cluster further.
  d.class is the name of the value. That will be the text in the bubbles.
*/
  var root = d3.hierarchy({children: classes})
      .sum(function(d) { return d.value; })
      .each(function(d) {
        if (id = d.data.id) {
          var id, i = id.lastIndexOf('.');
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
        }
      });

// create the groups with the class to refrence later.
  var group = svg.selectAll('.group')
    .data(pack(root).leaves())
    .enter().append('g')
      .attr('class', 'groups')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

/*
  Here we create the circle where we then animate the circle first with simple Easein
  and then the standart fill we animate with the standard easeLinear. Because this weekend was filled with bubbels.
  I Noticed there was a repeat function displayed at the API refrence. So i tried to make an Animation out of it.
  First we set a delay between the animations and on the start of the Animation we create a repeat function with the styles we want.
  You can kinda see it as a loop but to make it smooth we need to start and end with the colors.
*/
  group.append('circle')
  .transition()
      .duration(1000)
      .ease(d3.easeSinIn)
      .attr('id', function(d) { return d.id; })
      .attr('r', function(d) { return d.r;})
      .transition()
        .duration(750)
        .ease(d3.easeLinear)
      .style('fill', function(d) { return color(d.package); })
      .transition()
      .delay(function(d, i) { return i * 60; })
      .on("start", function repeatAnimation() {
        d3.active(this)
            .style("fill", "white")
            .style('stroke', '#F7E7CE')
            .style('stroke-width', 6)
          .transition()
            .style("fill", "lightgrey")
            .style('stroke', 'none')
            .style('stroke-width', 6)
          .transition()
            .style("fill", "lightgrey")
            .style('stroke-width', 6)
          .transition()
            .style("fill", "grey")
            .style('stroke-width', 6)
          .transition()
            .style("fill", "#7CC6FE")
            .style('stroke-width', 6)
          .transition()
            .style("fill", "#B6DCFE")
            .style('stroke-width', 6)
          .transition()
            .style("fill", "#B6DCFE")
            .style('stroke-width', 6)
          .transition()
            .style("fill", "white")
            .style('stroke', '#F7E7CE')
            .style('stroke-width', 6)
          .transition()
            .on("start", repeatAnimation);
      });

// the attrbute with the xlink href links all the circles together that needs to be together. As seen in the data like my Itunes and Spotify Cluster.
  group.append('clipPath')
      .attr('id', function(d) { return 'clip-' + d.id; })
    .append('use')
      .attr('xlink:href', function(d) { return '#' + d.id; });

      // adding the text of the class in the circle.
  group.append('text')
      .attr('clip-path', function(d) { return 'url(#clip-' + d.id + ')'; })
    .selectAll('tspan')
    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append('tspan')
      .attr('x', 0)
      .attr('y', function(d, i, groups) { return 13 + (i - groups.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; });

  group.append('title')
      .text(function(d) { return d.id + '\n' + format(d.value); });

});
