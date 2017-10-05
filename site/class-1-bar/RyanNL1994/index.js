// Bron Mike Bostock 20 aug 2017 https://bl.ocks.org/mbostock/3885304


// hier wordt een variable van de svg die in de html staat en de posititie van de grafiek wordt bepaald 
var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;


var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Hier wordt de data wat in mijn TSV bestand zit aangeroepen
d3.tsv("data.tsv", function (d) {
    d.uren = +d.uren;
    return d;
}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) {
        return d.dagen;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.uren;
    })]);

    
    // Hier krijgt de x as verschillende attributes en wordt bijv. de hoogte bepaald
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    
    // Hier krijgt de y as verschillende attributes en wordt bijv. de hoogte bepaald, fill, rotatie bepaald de tekst wordt opgevraagt onder het kopje uren van de TSV
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 2)
        .attr("x", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .attr("fill", "black")
        .text("uren");

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.dagen);
        })
        .attr("y", function (d) {
            return y(d.uren);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
            return height - y(d.uren);
        });
});
