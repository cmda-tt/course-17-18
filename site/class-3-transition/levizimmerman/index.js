/*
 * Based on: https://bl.ocks.org/mbostock/4063269
 */
var svg = d3.select('svg');
var width = window.innerWidth;
var height = window.innerHeight - 100;
var format = d3.format(',d');
/* Creates a color scale based on one of d3 predefined color schemes */
var color = d3.scaleOrdinal(d3.schemeCategory20c);
/* Creates a layout to hold all circles: https://github.com/d3/d3-hierarchy/blob/master/README.md#pack */
var pack = d3.pack().size([width, height]).padding(1.5);

d3.csv('index.csv', function(data) {
  data.value = +data.value;
  if (data.value) {
    return data;
  }
}, function(error, classes) {
  if (error) throw error;

  /* Creates a root node from hierarchial data: https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy */
  var root = d3.hierarchy({
      children: classes
    })
    .sum(function(data) {
      return data.value;
    })
    .each(function(data, index) {
      if (id = data.data.id) {
        var id, index = id.lastIndexOf('.');
        data.id = id;
        data.package = id.slice(0, index);
        data.class = id.slice(index + 1);
      }
    });

  /* Select or create elements with the classname 'node' and set the position based on the data */
  var node = svg.selectAll('.node')
    .data(pack(root).leaves())
    .enter().append('g')
    .on('mouseenter', handleMouseEnter)
    .on('mouseleave', handleMouseLeave)
    .attr('class', 'node')
    .attr('transform', function(data) {
      return 'translate(' + data.x + ',' + data.y + ')';
    });

  /* Add circle elements to node and set the position and the fill */
  node.append('circle')
    .transition()
    .duration(500)
    .ease(d3.easeBackOut)
    .delay(function(data, index) {
      return index * 30;
    }).attr('r', 0)
    .attr('id', function(data) {
      return data.id;
    })
    .attr('r', function(data) {
      return data.r;
    })
    .style('fill', function(data) {
      return color(data.package);
    });

  /* Add clipPath elements to create a clipping mask for the text within the circle */
  node.append('clipPath')
    .attr('id', function(data) {
      return 'clip-' + data.id;
    })
    .append('use')
    .attr('xlink:href', function(data) {
      return '#' + data.id;
    });

  /* Add text element and position them relative to the circle they belong to using a reference based on an ID */
  node.append('text')
    .attr('clip-path', function(data) {
      return 'url(#clip-' + data.id + ')';
    })
    .selectAll('tspan')
    .data(function(data) {
      return data.class.split(/(?=[A-Z][^A-Z])/g);
    })
    .enter().append('tspan')
    .attr('x', 0)
    .attr('y', function(data, index, nodes) {
      return 13 + (index - nodes.length / 2 - 0.5) * 10;
    })
    .text(function(data) {
      return data;
    });

  /* Add title element to improve accessibility of the datavisualisation */
  node.append('title')
    .text(function(data) {
      return data.id + '\n' + format(data.value);
    });

  /*
   * Handles mouse enter event of .node
   */
  function handleMouseEnter(elementData) {
    // Select all package elements
    node.selectAll('circle').filter(function(data, index) {
        return elementData.package === data.package;
      })
      .attr('r', function(data) {
        return data.r;
      })
      .transition()
      .duration(300)
      .ease(d3.easeBackOut)
      .attr('r', function(data) {
        return data.r + (data.r / 100 * 10);
      });
  }

  /*
   * Handles mouse leave event of .node
   */
  function handleMouseLeave(elementData) {
    // Select all package elements
    node.selectAll('circle').filter(function(data, index) {
        return elementData.package === data.package;
      })
      .attr('r', function(data) {
        return data.r + (data.r / 100 * 10);
      })
      .transition()
      .duration(300)
      .ease(d3.easeBackOut)
      .attr('r', function(data) {
        return data.r;
      });

  }
});
