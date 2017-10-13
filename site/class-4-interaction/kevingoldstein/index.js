var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%b")

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var line1 = d3.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.Amsterdam);
    });

var line2 = d3.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.Berlijn);
    });

d3.csv("data.csv", function (error, data) {
    if (error) throw error;

    data.forEach(function (d) {
        d.date = parseTime(d.date);
        d.Amsterdam = +d.Amsterdam;
        d.Berlijn = +d.Berlijn
    })

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(data, function (d) {
        return Math.max(d.Amsterdam, d.Berlijn);
    })]);

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Temp ℃");

    g.append("path")
        .data([data])
        .attr("d", line1)
        .attr("id", "line1")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .on("click", function () {
            d3.select("#line1").attr("stroke-width", 0)
        })

    g.append("path")
        .data([data])
        .attr("d", line2)
        .attr("id", "line2")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .on("click", function () {
            d3.select("#line2").attr("stroke-width", 0)
        })


    document.getElementById("reset").onclick = function () {
        d3.select("#line1").attr("stroke-width", 1.5)
        d3.select("#line2").attr("stroke-width", 1.5)
    }
});