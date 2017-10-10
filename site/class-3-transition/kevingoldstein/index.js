/* Maakt een variabele aan voor svg, width en height */
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

/* maakt een colorscale aan met de gegeven kleuren */
var color = d3.scaleOrdinal(["salmon", "cadetblue", "burlywood"]);

/* maakt een nieuwe pack layout aan */
var pack = d3.pack()
    .size([width, height])
    .padding(1.5);

/* haalt de data uit het csv bestand */
d3.csv("index.csv", function (d) {
    d.value = +d.value;
    if (d.value) return d;
}, function (error, classes) {
    if (error) throw error;

    /* deze snap ik nog niet zo goed, maar het selecteert de classes uit het csv bestand, dus wat na de punt komt */
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

    var node = svg.selectAll(".node")
        .data(pack(root).leaves())
        .enter().append("g")
        .on("mouseenter", Mousein)
        .on("mouseleave", Mouseout)
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    /* geeft aan circle in de svg een transitie mee en een aantal attributen + kleur die bij de package hoort */

    node.append("circle")
        .transition()
        .duration(500)
        .ease(d3.easeBackOut)
        .delay(function (data, index) {
            return index * 30;
        })
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
            return d.id + "\n";
        });

    /* een functie die bij het hoveren van de muis een vergroting geeft aan de cirkels die horen bij de package */
    function Mousein(x) {
        node.selectAll('circle').filter(function (data, index) {
                return x.package === data.package;
            })
            .attr('r', function (data) {
                return data.r;
            })
            .transition()
            .duration(300)
            .ease(d3.easeBackOut)
            .attr('r', function (data) {
                return data.r + (data.r * 0.1);
            });
    }

    /* een functie die bij het weghalen van de muis een de normale grootte weer terug geeft aan de cirkels */
    function Mouseout(x) {
        node.selectAll('circle').filter(function (data, index) {
                return x.package === data.package;
            })
            .attr('r', function (data) {
                return data.r + (data.r / 100 * 10);
            })
            .transition()
            .duration(300)
            .ease(d3.easeBackOut)
            .attr('r', function (data) {
                return data.r;
            });
    }
})

/* 
    I used the following chart code:
    Bubble Chart from Mike Bostocks
    https://bl.ocks.org/mbostock/4063269
*/