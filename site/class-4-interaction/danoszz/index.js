// All the credits go to the allmighty Mike Bostock
// Source: https://bl.ocks.org/mbostock/3884955, edited by @danoszz for styling purposes
// Code is used before in https://github.com/cmda-fe3/course-17-18/tree/master/site/class-3-transition/danoszz

let svg = d3.select('svg'),
  margin = {
    top: 20,
    right: 80,
    bottom: 30,
    left: 50
  },
  width = svg.attr("width") - margin.left - margin.right,
  height = svg.attr("height") - margin.top - margin.bottom,
  g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const parseTime = d3.timeParse('%Y%m%d');

const color = d3
  .scaleOrdinal()
  .domain(["New York", "San Francisco", "Austin"])
  .range(["#FBFE56", "#0000ED", "#75FFC0"]);

let x = d3.scaleTime().range([0, width]),
  y = d3.scaleLinear().range([height, 0]),
  z = color, // set custom colors
  t = d3
    .transition()
    .duration(750)
    .ease(d3.easeCubicInOut);

const line = d3
  .line()
  .curve(d3.curveBasis)
  .x(d => x(d.date))
  .y(d => y(d.temperature));

d3.tsv('index.tsv', type, (error, data) => {
  if (error) throw error;

  const cities = data.columns.slice(1).map(id => ({
    id,
    values: data.map(d => ({ date: d.date, temperature: d[id] }))
  }));

  x.domain(d3.extent(data, d => d.date));

  y.domain([
    d3.min(cities, c => d3.min(c.values, d => d.temperature)),
    d3.max(cities, c => d3.max(c.values, d => d.temperature))
  ]);

  z.domain(cities.map(c => c.id));

  g
    .append("g")
    .attr("class", "axis axis--x")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  g
    .append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("fill", "#fff")
    .text("Temperature, ºF");

  const city = g
    .selectAll(".city")
    .data(cities)
    .enter()
    .append("g")
    .attr("class", "city");

  const path = city
    .append("path")
    .attr("class", "line")
    .attr("d", d => line(d.values))
    .style("stroke", d => z(d.id))
    .attr("stroke", "steelblue")
    .attr("stroke-width", "2")
    .attr("fill", "none");

  const totalLength = path.node().getTotalLength();

  path
    .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(3800)
    .ease(d3.easeCubicInOut)
    .delay(200)
    .attr("stroke-dashoffset", 0);

  city
    .append("text")
    .datum(d => ({ id: d.id, value: d.values[d.values.length - 1] }))
    .transition(t)
    .delay(3000)
    .attr(
      "transform",
      d => `translate(${x(d.value.date)},${y(d.value.temperature)})`
    )
    .attr("x", 3)
    .attr("dy", "0.35em")
    .style("font", "10px sans-serif")
    .text(d => d.id);

  // Credits for tooltips go to https://stackoverflow.com/questions/34886070/multiseries-line-chart-with-mouseover-tooltip, edited by @danoszz for styling purposes

  const mouseG = g // fix offset of initial SVG, same as line 15
    .attr("class", "mouse-over-effects");

  mouseG
    .append("path") // this is the black vertical line to follow mouse
    .attr("class", "mouse-line")
    .style("stroke", "white")
    .style("stroke-width", "0.5px")
    .style("opacity", "0");

  const lines = document.getElementsByClassName("line");

  const mousePerLine = mouseG
    .selectAll(".mouse-per-line")
    .data(cities)
    .enter()
    .append("g")
    .attr("class", "mouse-per-line");

  mousePerLine // these are the circles at your mousehover
    .append("circle")
    .attr("r", 6)
    .style("stroke", d => z(d.id))
    .style("fill", "none")
    .style("stroke-width", "1px")
    .style("opacity", "0");

  mousePerLine.append("text").attr("transform", "translate(10,3)");

  mouseG
    .append("svg:rect") // append a rect to catch mouse movements on canvas
    .attr("width", width) // can't catch mouse events on a g element
    .attr("height", height)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mouseout", () => {
      // on mouse out hide line, circles and text
      d3.select(".mouse-line").style("opacity", "0");
      d3.selectAll(".mouse-per-line circle").style("opacity", "0");
      d3.selectAll(".mouse-per-line text").style("opacity", "0");
    })
    .on("mouseover", () => {
      // on mouse in show line, circles and text
      d3.select(".mouse-line").style("opacity", "1");
      d3.selectAll(".mouse-per-line circle").style("opacity", "1");
      d3.selectAll(".mouse-per-line text").style("opacity", "1");
    })
    .on("mousemove", function() {
      // mouse moving over canvas
      const mouse = d3.mouse(this);
      d3.select(".mouse-line").attr("d", () => {
        let d = `M${mouse[0]},${height}`;
        d += ` ${mouse[0]},${0}`;
        return d;
      });

      d3.selectAll(".mouse-per-line").attr("transform", function(d, i) {
        let xDate = x.invert(mouse[0]),
          bisect = d3.bisector(d => d.date).right;
        idx = bisect(d.values, xDate);

        let beginning = 0,
          end = lines[i].getTotalLength(),
          target = null;

        while (true) {
          target = Math.floor((beginning + end) / 2);
          pos = lines[i].getPointAtLength(target);
          if ((target === end || target === beginning) && pos.x !== mouse[0]) {
            break;
          }
          if (pos.x > mouse[0]) end = target;
          else if (pos.x < mouse[0]) beginning = target;
          else break; // position found
        }

        d3
          .select(this)
          .select("text")
          .text(y.invert(pos.y).toFixed(2));

        return `translate(${mouse[0]},${pos.y})`;
      });
    });
});
function type(d, _, columns) {
  d.date = parseTime(d.date);
  for (var i = 1, n = columns.length, c; i < n; ++i) {
    {
      d[(c = columns[i])] = +d[c];
    }
    return d;
  }
}
