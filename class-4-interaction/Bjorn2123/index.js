//onderstaande codes zijn van https://bl.ocks.org/mbostock/3885304 waarin ik zelf aanpassingen heb verricht

var svg = d3.select("svg");
var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var formatPercent = d3.format(".0%");

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xAxis = d3.axisBottom(x)
    .scale(x)

var yAxis = d3.axisLeft(y)
    .scale(y)
    .tickFormat(formatPercent);

/* in onderstaande code pak ik het csv file en maak ik functie d aan die de percentages uit het bestand pakt en returned*/

d3.csv("index.csv", function (d) {
    d.percentage = +d.percentage;
    return d;
}, function (error, data) {
    if (error) throw error;
    data.forEach(function (d) {
        d.percentage = +d.percentage;
    });


    x.domain(data.map(function (d) {
        return d.letter;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.percentage;
    })]);
    
// code voor het aanmaken van de x as
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    
    // code voor het aanmaken van de y as
    g.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)
        .append("text")
        .style('fill', 'black')
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Percentage");
    
    // code voor eht aanmaken van de bars
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.letter);
        })
        .attr("y", function (d) {
            return y(d.percentage);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
            return height - y(d.percentage);
        });

    // hier selecteer ik de input en geef daar een change event aan die de functie change uitvoert.
    
    
    d3.select("input").on("change", change);

    var sortTimeout = setTimeout(function () {
        d3.select("input").property("checked", true).each(change);
    }, 5000);

    
    /* in onderstaande code maak ik een functie aan die kijkt of er gechecked is en returned zodra de functie dat weet, de manier van weergeven terug. In de eerste return is dat de normale waarde en in de tweede return gesorteerd op grootte */
    function change() {
        clearTimeout(sortTimeout);

        var x0 = x.domain(data.sort(this.checked ? function (a, b) {
                    return b.percentage - a.percentage;
                } : function (a, b) {
                    return d3.ascending(a.letter, b.letter);
                })
                .map(function (d) {
                    return d.letter;
                }))
            .copy();

        svg.selectAll(".bar")
            .sort(function (a, b) {
                return x0(a.letter) - x0(b.letter);
            });
        
        //in onderstaande code geef ik de transitie van de sv een ease bounce en geef ik de transitie een duur van 1 seconde.

        var transition = svg.transition().duration(1000).ease(d3.easeBounce),
            delay = function (d, i) {
                return i * 50;
            };

        transition.selectAll(".bar")
            .delay(1000)
            .attr("x", function (d) {
                return x0(d.letter);
            });

        transition.select(".x.axis")
            .call(xAxis)
            .selectAll("g")
            .delay(1000);
    }


});