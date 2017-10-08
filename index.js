var svg = d3.select("svg"),
    margin = {
        top: 70,
        right: 20,
        bottom: 20,
        left: 50
    },

    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;


var x = d3.scaleBand().rangeRound([0.5, width]).padding(0.22),
    y = d3.scaleLinear().rangeRound([height, 0.4]);

var g = svg.append("g") //
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.tsv("data.tsv", function (d) {
    d.Goodness = +d.Goodness;
    return d;

}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) {
        return d.Amount;
    })); //maakt array op x as
    y.domain([0, d3.max(data, function (d) {
        return d.Goodness;
    })]); //laadt maximale waarde tabel

    g.append("g")

    .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y") //
        .call(d3.axisLeft(y).ticks(11)) //Hoeveel streepjes de y-as krijgt
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Goodness");

    g.selectAll(".bar") //selecteert class .bar in variabel g
        .data(data) //Load data! 
        .enter().append("rect") //Creert rechthoek om barchart te visualiseren.
        .attr("class", "bar") 
        .attr("x", function (d) {
            return x(d.Amount); //plaatst alle data voor x as
        })
        .attr("y", function (d) {
            return y(d.Goodness); ////plaatst alle data voor y as
        })
        .attr("width", x.bandwidth()) 
        .attr("height", function (d) {
            return height - y(d.Goodness); //alles met de class .bar krijgt hoogte y as
        });
    

});








