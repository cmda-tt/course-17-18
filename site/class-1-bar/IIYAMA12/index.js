// if (d3) {
//     console.log("d3 exist");
// }
var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
// html element <svg width="960" height="500">, add attributes

// prepare the size / scale of the bar chart
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);
// d3.scaleBand() Make a new 'band scale'with an empty domain. Default: Range [0, 1]. No padding. No rounding and center alignment. // https://github.com/d3/d3-scale
// d3.scaleLinear() Make a new "continuous scale" (https://github.com/d3/d3-scale#continuous-scales) Default: Range [0, 1]. This scale method use usefull for quantitative data.
// console.log("x:", x(), ", y:", y());
// Nothing usefull to see: x: undefined , y: NaN


// html element <g transform="translate(40,20)">, add attribute transform
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// read tsv data file
d3.tsv("index.tsv", function(d) {
    // convert string to number
    //console.log("d.hunger 1:", d.hunger, typeof(d.hunger)); // example: .08167 string
    d.hunger = +d.hunger;
    //console.log("d.hunger 2:", d.hunger, typeof(d.hunger)); // example to: 0.08167 number

    return d;
}, function(error, data) {
    if (error) throw error;

    // .map > Loops through all the array data. It is able to modify it, through a custom function.

    x.domain(data.map(function(d) {
        //console.log("d.name", d.name);
        return d.name;
    }));
    //console.log("x.domain result:", x.domain());
    // domain seems to be a d3 function: https://www.dashingd3js.com/d3js-scales Used to convert intervals(domain) to new intervals(range).

    // After disabling this piece of code, scaled the bar charts incorrect.
    // d3.max(array[, accessor]) // https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md
    y.domain([0, d3.max(data, function(d) { // [0, max value of array]
        // console.log("d.hunger", d.hunger);
        return d.hunger;
    })]);

    // create a new element >g<(group). (bottom line of the x axis)
    // <g class="axis axis--x" transform="translate(0,450)"></g>
    // Apply classes.
    // Add transformation which adjust the height of the element based on the svg element height.
    // Call a custom function (d3.axisBottom). (In this case from d3.)
    // https://github.com/d3/d3-axis/blob/master/README.md#axisBottom
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)); // This part is required to show the bottom axis.


    // <g class="axis axis--y" fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(5, "%")) // "%" character after number. 10 = 1%, 2%, 3%, 4%, etc. | When set to: 20 = 0.5%, 1.0%, 1.5%, 2%, 2.5%, 3%, etc.
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("hunger");

    // var xBandwidth = function () {
    //     console.log("called function xBandwidth");
    //     return x.bandwidth();
    // };

    // hunger effect effect
    g.selectAll(".bar-hunger-effect")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar-hunger-effect")
        .attr("x", function(d) {
            return x(d.name);
        })
        .attr("y", function(d) {
            return y(d.hunger);
        })
        .attr("width", x.bandwidth())
        .attr("height", function(d) {
            return height - y(d.hunger);
        });

    // this code will create and edit the height of ALL bar elements.
    g.selectAll(".bar") // select all created elements within the statement
        .data(data)
        .enter().append("rect") // create a rectangle
        .attr("class", "bar") // class
        .attr("x", function(d) { // x pos
            //console.log("apply to elements d.name", d.name); When giving the second argument of the function at index 'attr' another <function>,  it will call that <function> for all elements.
            return x(d.name);
        })
        .attr("y", function(d) { // y pos
            return y(d.hunger);
        })
        .attr("width", x.bandwidth()) // It seems like this function only get called only one time. Tested: replaced x.bandwidth() with xBandwidth.
        .attr("height", function(d) {
            return height - y(d.hunger);
        }).append("animate") // Added my first svg animation
        .attr("attributeName", "height")
        .attr("from", function(d) {
            return height - y(d.hunger);
        })
        .attr("to", "0")
        .attr("dur", "1s")
        .attr("begin", "mouseover")
        .attr("fill", "freeze");




    // console.log("x.bandwidth()", x.bandwidth());

    // console.log("x:", x(23), ", y:", y(54));
    // strange: x: undefined , y: -190858

    // console.log("x:", x("T"), ", y:", y(54));
    // x: 656 , y: -190858
    document.querySelector('main > svg').addEventListener('mouseover', function(e) { // stangely doesn't accept svg as start element
        var source = e.target;
        // if (source.classList.contains("bar")) {
        //     console.log("contains bar");
        // }
    });
});
