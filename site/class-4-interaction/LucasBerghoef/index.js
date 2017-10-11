// Based on: https://bl.ocks.org/mbostock/3885304

var svg = d3.select("svg"); // I removed the chained variable assignment to make it less prone to human error.
var input = d3.select("input");
var margin = { top: 20, right: 20, bottom: 30, left: 40 };
var width = +svg.attr("width") - margin.left - margin.right;
var height = +svg.attr("height") - margin.top - margin.bottom;

var timeout = d3.timeout(change, 2000); // Automatically starts the animation after two seconds

d3.select('input').on('change', onchange); // Bind the onchange function to changes in the input field

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data; // Global variable

d3.tsv("data.tsv", function (d) {
    d.frequency = +d.frequency;
    return d;
}, function (error, d) {
    if (error) throw error;

    data = d; // Assign the global variable

    x.domain(data.map(function (d) { return d.letter; }));
    y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.letter); })
        .attr("y", function (d) { return y(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.frequency); });
});


function onchange() {
    var sort = this.checked ? helper.sortOnFrequency : helper.sortOnLetter; // Chooses the sort function based on the state of the checkbox
    var x0 = x.domain(data.sort(sort).map(helper.letter)).copy();
    var transition = svg.transition(); // Allows me to animate changes to the chart

    timeout.stop(); // Stops the timeout so it won't change my selection

    /* Initial sort */
    svg.selectAll('.bar').sort(sortBar);

    /* Move the bars. */
    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', barX0);

    /* Move the labels. */
    transition.select('.axis--x')
        .call(d3.axisBottom(x))
        .selectAll('g')
        .delay(delay);

    function sortBar(a, b) {
        return x0(helper.letter(a)) - x0(helper.letter(b));
    }

    function barX0(d) {
        return x0(helper.letter(d));
    }

    function delay(d, i) {
        return i * 50;
    }
}

function change() {
    // Used by the timeout to change the value of the input field.
    d3.select('input')
        .property('checked', true)
        .dispatch('change');
}


/* Helper functions. Only perform a single task and returns the result
====================================================================== */
const helper = {

    /* Calculate `x` for a bar. */
    barX: function(d) {
        return x(helper.letter(d));
    },

    /* Calculate `y` for a bar. */
    barY: function(d) {
        return y(helper.frequency(d));
    },

    /* Clean a row. */
    row: function(d) {
        d.frequency = Number(helper.frequency(d));
        return d;
    },

    /* Sort on frequence. */
    sortOnFrequency: function(a, b) {
        return helper.frequency(b) - helper.frequency(a);
    },

    /* Sort on letters. */
    sortOnLetter: function(a, b) {
        return d3.ascending(
            helper.letter(a), 
            helper.letter(b)
        );
    },

    /* Get the letter field for a row. */
    letter: function(d) {
        return d.letter;
    },

    /* Get the frequency field for a row. */
    frequency: function(d) {
        return d.frequency;
    }

}
