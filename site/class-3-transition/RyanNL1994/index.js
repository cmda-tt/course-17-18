// Deze bubble chart heb ik gehaald van https://bl.ocks.org/mbostock/4063269 en is gemaakt door Mike Bostock op 2 oktober 2017

// Hier wordt een variabele gemaakt die svg heet en in deze variabele wordt de svg in de html opgeroepen door d3. Ook wordt de width en de height van de svg aangeroepen vanuit de html.
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);

// Hier wordt de csv opgeroepen door d3 waar alle data in staat. De id die in de csv staat wordt wordt getoond in de bubbles en de value (cijfers) die in de csv staat bepaald de grote van de bubble. Dit wordt gemaakt aan de hand van de onderstaande functie.
d3.csv("flare.csv", function (d) {
    d.value = +d.value;
    if (d.value) return d;
}, function (error, classes) {
    if (error) throw error;

    var root = d3.hierarchy({
            children: classes
        })
        .sum(function (d) {
            return d.value;
        })
        .each(function (d) {
            if (id = d.data.id) {
                var id, i = id.lastIndexOf(".");
                d.id = id;
                d.package = id.slice(0, i);
                d.class = id.slice(i + 1);
            }
        });


    // hier worden de bubbles gemaakt en wordt de id van de csv gereturnd. De tekst van de id van de csv wordt dus geplaats in de bubble. Ook wordt de formaat bepaald aan de hand van de value in de csv.
    var node = svg.selectAll(".node")
        .data(pack(root).leaves())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("circle")
        .attr("id", function (d) {
            return d.id;
        })
        .attr("r", function (d) {
            return d.r;
        })
        .style("fill", function (d) {
            return color(d.package);
        });

    node.append("clipPath")
        .attr("id", function (d) {
            return "clip-" + d.id;
        })
        .append("use")
        .attr("xlink:href", function (d) {
            return "#" + d.id;
        });

    node.append("text")
        .attr("clip-path", function (d) {
            return "url(#clip-" + d.id + ")";
        })
        .selectAll("tspan")
        .data(function (d) {
            return d.class.split(/(?=[A-Z][^A-Z])/g);
        })
        .enter().append("tspan")
        .attr("x", 0)
        .attr("y", function (d, i, nodes) {
            return 13 + (i - nodes.length / 2 - 0.5) * 10;
        })
        .text(function (d) {
            return d;
        });

    node.append("title")
        .text(function (d) {
            return d.id + "\n" + format(d.value);
        });

    // hier pakt d3 alle circle's die zojuist hierboven zijn gemaakt en voegt het de volgende transition toe: 1. alle bubbles veranderen langzaam in 9 sec naar geel 2. Daarna worden alle bubbles binnen 2 sec. zwart. 3. daarna veranderen de bubbles elke keer in een aantal kleuren (rood, blauw, rood, bruin, groen, aqua en weer blauw de duration tussen kleuren kan verschillen). 4. Daarna is er een delay van 3 seconden. 4. Nu bounced de circle naar grijs en blijft de kleur grijs.
    d3.selectAll('circle')
        .transition().duration(9000).style('fill', 'yellow')
        .transition().duration(1000).style('fill', 'black')
        .transition().duration(1000).style('fill', 'red')
        .transition().duration(300).style('fill', 'blue')
        .transition().duration(300).style('fill', 'red')
        .transition().duration(500).style('fill', 'brown')
        .transition().duration(500).style('fill', 'green')
        .transition().duration(800).style('fill', 'aqua')
        .transition().duration(800).style('fill', 'blue')
        .transition()
        .delay(3000)
        .ease(d3.easeBounce)
        .style('fill', 'gray')
});
