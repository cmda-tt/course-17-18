/*
 * Bubble chart data: https://bl.ocks.org/mbostock/4063269
 * Transition and structure: https://bl.ocks.org/HarryStevens/54d01f118bc8d1f2c4ccd98235f33848
 */

var svg = d3.select("svg");
var legend = d3.select(".legend-container");
var margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};
var width = window.innerWidth - margin.left - margin.right;
var height = window.innerHeight - margin.top - margin.bottom;
var file = './index.csv';
var format = d3.format(",d");
var color = d3.scaleOrdinal(d3.schemeCategory20b);
var sortButton = d3.select('#sortButton')
  .on('click', handleSort);
var packages = [];
var sort = 'DESC';
var hasSorted = false;
var bubbleTransition = d3.transition()
  .duration(750);
var pack = d3.pack()
  .size([width, height])
  .padding(1.5);

svg.attr('width', width)
  .attr('height', height);

/*
 * Stating BubbleChart Instance
 */
var BubbleChart = function(file) {
  if (!file) {
    console.error('BubbleChart is called but no file was given to load.');
  }
  d3.csv(file, function(data) {
    // If no packes are selected, do not filter
    if (packages.length < 1) {
      data.value = +data.value;
      if (data.value) return data;
    } else {
      // If packages array is filled check which packages are selected
      var isInPackages = packages.indexOf(getPackage(data.id)) === -1 ? false : true;
      // Add data when package is found in packages array
      if (isInPackages) {
        data.value = +data.value;
        if (data.value) return data;
      }
    }
  }, function(error, classes) {
    if (error) throw error;

    // Apply sorting using the sort variable (can be 'ASC' or 'DESC')
    classes.sort(function(current, next) {
      return sort === 'ASC' ? current.value - next.value : next.value - current.value;
    });

    // Create hierarchial data map
    var root = d3.hierarchy({
        children: classes
      })
      .sum(function(data) {
        return data.value;
      })
      // Map the data appending id, package to data object
      .each(function(data) {
        if (id = data.data.id) {
          var id, index = id.lastIndexOf(".");
          data.id = id;
          data.package = getPackage(data.data.id);
          data.class = id.slice(index + 1);
          // Add package to packages array if displayed package is not array already
          if (packages.indexOf(data.package) === -1) {
            packages.push(data.package);
          }
        }
      });

    /*
     * Join the data using the ID of each data point to create a relation between the element and data
     */
    var circle = svg.selectAll("circle")
      .data(pack(root).leaves(), function(data) {
        return data.id; // Add a key id to each leave
      });

    var clips = svg.selectAll("clipPath")
      .data(pack(root).leaves(), function(data) {
        return data.id; // Add a key id to each leave
      });

    var text = svg.selectAll("text")
      .data(pack(root).leaves(), function(data) {
        return data.id; // Add a key id to each leave
      });

    var legendItem = legend.selectAll('.legend-item')
      .data(packages, function(data) {
        return data;
      });

    /*
     * Removing elements and setting there transitions for attributes
     */
    circle.exit()
      .transition(bubbleTransition)
      .attr('r', 0)
      .remove();

    clips.exit().remove();

    text.exit()
      .transition(bubbleTransition)
      .attr('opacity', 0)
      .remove();

    legendItem.exit()
      .classed('active', false);

    /*
     * Update the elements and add transition to the attributes
     */
    circle.transition(bubbleTransition)
      .delay(function(data, index) {
        return hasSorted ? 0 : index * 10;
      })
      .attr('r', function(data) {
        return data.r;
      })
      .attr('cx', function(data) {
        return data.x;
      })
      .attr('cy', function(data) {
        return data.y;
      })
      .attr('id', function(data) {
        return data.id;
      });

    text.transition(bubbleTransition)
      .attr('x', function(data) {
        return data.x;
      })
      .attr('y', function(data) {
        return data.y;
      });

    /*
     * Enter new elements based on the data points and transition the attributes
     */
    circle.enter().append('circle')
      .attr('id', function(data) {
        return data.id;
      })
      .attr('class', function(data, index) {
        return data.package.replace(/\./g, '-'); //https://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
      })
      .attr('r', 0)
      .style('fill', function(data) {
        return color(data.package);
      })
      .attr('cx', function(data) {
        return data.x;
      })
      .attr('cy', function(data) {
        return data.y;
      })
      .on('click', handleClickCircle)
      .on('mouseenter', handleCircleMouseEnter)
      .on('mouseleave', handleCircleMouseLeave)
      .transition(bubbleTransition)
      .delay(function(data, index) {
        return index * 10;
      })
      .attr('r', function(data) {
        return data.r;
      });

    clips.enter().append('clipPath')
      .attr('id', function(data) {
        return 'clip-' + data.id;
      })
      .append('use')
      .attr('xlink:href', function(data) {
        return '#' + data.id
      });

    text.enter().append('text')
      .attr('clip-path', function(data) {
        return 'url(#clip-' + data.id + ')';
      })
      .attr('opacity', 0)
      .attr('x', function(data) {
        return data.x;
      })
      .attr('y', function(data) {
        return data.y;
      })
      .text(function(data) {
        return data.class;
      })
      .transition(bubbleTransition)
      .attr('opacity', 1);

    legendItem.enter().append('div')
      .attr('class', function(data) {
        var isInPackages = packages.indexOf(data) === -1 ? false : true;
        var className = 'legend-item';
        if (isInPackages) {
          className += ' active';
        }
        return className;
      })
      .attr('data-package', function(data) {
        return data;
      })
      .style('background-color', function(data) {
        return color(data);
      })
      .text(function(data) {
        return data;
      })
      .on('click', togglePackage);

    hasSorted = false;
  });
}

/*
 * Toggles a package filter from clicked legend item
 */
function togglePackage(data) {
  var item = d3.select(this);
  // If legend item active then toggle to inactive state else toggle to active state
  if (item.classed('active')) {
    // Remove active classname from legend item
    item.classed('active', false);
    // Remove package filter from array of packages using spice method to overwrite the packages array variable
    packages.splice(packages.indexOf(item.attr('data-package')), 1);
  } else {
    // Add active classname to selected legend item
    item.classed('active', true);
    // Add filter package to array of packages
    packages.push(item.attr('data-package'));
  }
  // Create instance of the bubble chart
  new BubbleChart(file);
}

/*
 * Handles click event of circle in bubble chart
 */
function handleClickCircle(data, index) {
  // Overwrites packages array with the single package filter of selected circle
  packages = [data.package];
  // Create new instance of the bubble chart
  new BubbleChart(file);
  // Force mouse leave event to remove hover state
  handleCircleMouseLeave(data, index);
}

/*
 * Gets package based on ID
 */
function getPackage(id) {
  // Last index of dot is before identifier of string
  var index = id.lastIndexOf('.');
  // Return string before identifier of string
  return id.slice(0, index);
}

/*
 * Handles circle mouse enter event
 */
function handleCircleMouseEnter(data, index) {
  // Get classname of current item
  var className = d3.select(this)
    .attr('class');
  // Select all circles with the same class name and add highlight className
  d3.selectAll('.' + className)
    .classed('highlight', true);
}

/*
 * Handles circle mouse leave event
 */
function handleCircleMouseLeave(data, index) {
  // Selects all element with the highlight className and remove the classname
  d3.selectAll('.highlight')
    .classed('highlight', false);
}

/*
 * Handles sort button click event
 */
function handleSort() {
  // Set global variable hasSorted to true
  hasSorted = true;
  // Switch between 'ASC' and 'DESC' sorting
  sort = sort === 'DESC' ? 'ASC' : 'DESC';
  // Set text of button according to the new sort variable value
  var text = sort === 'DESC' ? 'High to low' : 'Low to high';
  this.textContent = text;
  // Create new instance of the BubbleChart
  new BubbleChart(file);
}

// When window is loaded create instance of BubbleChart
window.onload = new BubbleChart(file);
