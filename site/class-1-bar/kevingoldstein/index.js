var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// Schaalt de x en de y van de chart in de svg
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);


var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// zet de data uit het csv bestand erin (loaden) en geeft er een functie aan
d3.csv("data.csv", function (a) {

    // alle objecten onder hoelang worden verzameld en returned
    a.hoelang = +a.hoelang;

    return a;
}, function (error, data) {
    // error weghalen als deze voorkomt
    if (error) throw error;

    // het schalen van het domain naar de waardes voor de output in de svg met de waardes uit de csv - wat ik begreep van https://www.dashingd3js.com/d3js-scales
    x.domain(data.map(function (a) {
        return a.gedaan;
    }));
    y.domain([0, d3.max(data, function (a) {
        return a.hoelang;
    })]);


    // geeft classes aan de svg-objecten 
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Aantal uren");

    // geeft classes aan de bars binnen de svg
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.gedaan);
        })
        .attr("y", function (d) {
            return y(d.hoelang);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
            return height - y(d.hoelang);
        });

});