var graphData;


//

svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 60,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom



function type(d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
}

var focusMode = false; // are we viewing one bar type?

function makeGraph (onlyColumn, fillColor) { // makeGraph([index onlyColumn, string fillColor])

    var data = deepClone(graphData);

    if (onlyColumn != undefined) {
        d3.select("svg").attr("class", "focus-mode"); // Change the cursor to a NON click icon while hovering.

        // javascript > var objectKey = Object.keys(data[0])[onlyColumn]; // https://davidwalsh.name/object-keys
        var objectKeys = d3.keys(data[0]); // https://github.com/d3/d3-collection/blob/master/README.md#keys
        var dataObjectKey = objectKeys[onlyColumn];
        objectKeys.splice(0, 1); // remove state index
        objectKeys.splice(onlyColumn - 1, 1); // remove data index
        // objectKeys.splice(objectKeys.length - 1, 1); // remove total index


        // this code will remove the unrequired data:
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                data[i]["Other"] = (data[i].total) - (data[i][dataObjectKey]);
                for (var j = 0; j < objectKeys.length; j++) {
                    var objectKey = objectKeys[j];
                    delete data[i][objectKey];
                }
            }
        }

        // Update the columns variable. Strange data inside of the array, which is accessable with a string.
        var updateTheColumns = [];
        var newKeys = d3.keys(data[0]);
        for (var i = 0; i < newKeys.length; i++) {
            updateTheColumns[updateTheColumns.length] = newKeys[i];
        }
        data.columns = updateTheColumns;

        focusMode = true; // enable the state
    } else {
        focusMode = false;// disable the state

        d3.select("svg").attr("class", ""); // Change the cursor back to a click icon while hovering.
    }

    svg.html(""); // Clean the whole graph.



    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .align(0.1);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    var colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];


    var stack = d3.stack()
        .offset(d3.stackOffsetExpand);




    var z = d3.scaleOrdinal()
        .range(focusMode ? [fillColor, "#ffffff"] : colors); // apply color of focus mode or the default colors.

    // deepClone(colors).splice(0, d3.keys(data[0]).length - 2)


    // disabled sort function.
    // data.sort(function(a, b) {
    //     return b[data.columns[1]] / b.total - a[data.columns[1]] / a.total;
    // });

    x.domain(data.map(function(d) {
        return d.State;
    }));

    z.domain(data.columns.slice(1));
    var serie = g.selectAll(".serie")
        .data(stack.keys(data.columns.slice(1))(data))
        .enter().append("g")
        .attr("class", "serie")
        .attr("fill", function(d) {
            return z(d.key);
        });

    // if the focusMode is enabled then do not make the graph click able.
    if (!focusMode) {
        serie.on("click", function() {
            if (this.tagName === "g") {
                var index = getNoteIndex(this); // custom function
                makeGraph (index + 1, this.getAttribute("fill")); // show the new graph with focusmode.
                setTimeout(makeGraph, 2000); // restory the default graph
            }
        });
    }

    serie.selectAll("rect")
        .data(function(d) {
            return d;
        })
        .enter().append("rect")
        .attr("x", function(d) {
            return x(d.data.State);
        })
        .attr("y", function(d) {
            //console.log("d[1], y(d[1]):",d[1], y(d[1]));
            return y(d[1]);
        })
        .attr("height", function(d) {
            return y(d[0]) - y(d[1]);
        })
        .attr("width", x.bandwidth());

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"));

    var legend = serie.append("g")
        .attr("class", "legend")
        .attr("transform", function(d) {
            var d = d[d.length - 1];
            return "translate(" + (x(d.data.State) + x.bandwidth()) + "," + ((y(d[0]) + y(d[1])) / 2) + ")";
        });

    legend.append("line")
        .attr("x1", -6)
        .attr("x2", 6)
        .attr("stroke", "#000");

    legend.append("text")
        .attr("x", 9)
        .attr("dy", "0.35em")
        .attr("fill", "#000")
        .style("font", "10px sans-serif")
        .text(function(d) {
            return d.key;
        });

}



d3.csv("index.csv", type, function(error, graphData_) {
    if (error) throw error;
    console.log("graphData:", graphData_);
    graphData = graphData_;

    makeGraph();
});




// usefull functions



// deepClose
// by trincot
// Titel:  Here is an ES6 function that will also work for objects with cyclic references:
// Link: https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript

function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    var result = Array.isArray(obj) ? []
               : obj.constructor ? new obj.constructor() : Object.create(null);
    hash.set(obj, result);
    if (obj instanceof Map)
        Array.from(obj, ([key, val]) => result.set(key, deepClone(val, hash)) );
    return Object.assign(result, ...Object.keys(obj).map (
        key => ({ [key]: deepClone(obj[key], hash) }) ));
}


// getNoteIndex
// by Liv
// https://stackoverflow.com/questions/5913927/get-child-node-index
function getNoteIndex (child) {
    var infinityLoopProtection = 1000;
    var i = 0;
    while( (child = child.previousSibling) != null ) {
      i++;
      infinityLoopProtection--;
      if (infinityLoopProtection === 0) {
          break;
      }
    }
    return i;
}

//<!-- Bostock’s, M. (2017, 2 augustus). Bar Chart [Source code]. Geraadpleegd van https://bl.ocks.org/mbostock/3886394 -->
//<!-- Licent: https://opensource.org/licenses/GPL-3.0  -->
