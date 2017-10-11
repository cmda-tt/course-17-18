var svg = d3.select('svg');
var margin = {top: 20, right: 140, bottom: 30, left: 50};
var width = svg.attr('width') - margin.left - margin.right;
var height = svg.attr('height') - margin.top - margin.bottom;
var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var z = d3.scaleOrdinal(['#feca2f', '#2ffe63', '#2f63fe', '#fe2fca']);
var knmiCodes = {
  209: 'IJmond',
  210: 'Valkenburg',
  215: 'Voorschoten',
  225: 'IJmuiden',
  235: 'De Kooy',
  240: 'Schiphol',
  242: 'Vlieland',
  248: 'Wijdenes',
  249: 'Berkhout',
  251: 'Hoorn (Terschelling)',
  257: 'Wijk aan Zee',
  258: 'Houtribdijk',
  260: 'De Bilt',
  265: 'Soesterberg',
  267: 'Stavoren',
  269: 'Lelystad',
  270: 'Leeuwarden',
  273: 'Marknesse',
  275: 'Deelen',
  277: 'Lauwersoog',
  278: 'Heino',
  279: 'Hoogeveen',
  280: 'Eelde',
  283: 'Hupsel',
  285: 'Huibertgat',
  286: 'Nieuw Beerta',
  290: 'Twenthe',
  308: 'Cadzand',
  310: 'Vlissingen',
  311: 'Hoofdplaat',
  312: 'Oosterschelde',
  313: 'Vlakte v.d. Raan',
  315: 'Hansweert',
  316: 'Schaar',
  319: 'Westdorpe',
  323: 'Wilhelminadorp',
  324: 'Stavenisse',
  330: 'Hoek van Holland',
  331: 'Tholen',
  340: 'Woensdrecht',
  343: 'R’dam-Geulhaven',
  344: 'Rotterdam',
  348: 'Cabauw',
  350: 'Gilze-Rijen',
  356: 'Herwijnen',
  370: 'Eindhoven',
  375: 'Volkel',
  377: 'Ell',
  380: 'Maastricht',
  391: 'Arcen'
};
// You may start editing stuff here (but don’t change the file-name).
d3
  .text('index.txt')
  .get(onload)

function onload(err, doc) {
  if (err) throw err;

  var header = doc.indexOf('STN,YYYYMMDD');  // Get indexOf of header row
  var headerEnd = doc.indexOf("\n", header); // get end of header row
  var doc = doc.slice(headerEnd).trim();     // get the part which contains the data
      doc = doc.replace("#","");             // Get rid of the remaining #
      doc= doc.replace(/ +/g, "");           // Remove spaces

  var parseTime = d3.timeParse('%Y%m%d%H');  // parse time format

  var places = d3.csvParseRows(doc, map);

  function map(d) {
    if (d[7] === ""){return}                 // if empty give feedback

    return {                                 // Get data from document
      name: knmiCodes[d[0]],
      date: parseTime(d[1] + d[2]),
      temperature: Number(d[7]/10),
    }
  };

  places = d3.nest()                         // place data in correct format
            .key(d => d.name)
            .entries(places)
            .map(d => ({
                name: d.key,
                values: d.values
            }))
  // Use this place to transform doc (without changing it manually) into
  // something that looks like `example.json`:
        // https://github.com/cmda-fe3/course-17-18/blob/master/site/class-3/clean/example.json
  //
  // Notes:
  //
  // 1. Use the `knmiCodes` variable to transform from KNMI’s codes to place
  //    names
  // 2. Use actual Date objects instead of strings for all `date` keys:
  //    https://developer.mozilla.org/JavaScript/Reference/Global_Objects/Date
  //
  // Store the results in the variable `places`:


  // Do not change stuff below this line.
  x.domain(d3.extent(flatten(places), date));
  y.domain(d3.extent(flatten(places), temperature)).nice();
  z.domain(places.map(name));
  var line = d3.line()
    .curve(d3.curveBasis)
    .x(lineX)
    .y(lineY);
  g.append('g')
    .attr('class', 'axis x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));
  g.append('g')
    .attr('class', 'axis y')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .text('Temperature, °C');
  var place = g
    .selectAll('.place')
    .data(places)
    .enter()
    .append('g')
    .attr('class', 'place');
  place
    .append('path')
    .attr('class', 'line')
    .attr('d', lineD)
    .style('stroke', lineStroke);
  place
    .append('text')
    .attr('transform', transformText)
    .attr('x', 3)
    .attr('dy', '0.35em')
    .text(name);
  function lineX(d) {
    return x(date(d));
  }
  function lineY(d) {
    return y(temperature(d));
  }
  function lineD(d) {
    return line(values(d));
  }
  function lineStroke(d) {
    return z(name(d));
  }
  function transformText(d) {
    var last = d.values[d.values.length - 1];
    return 'translate(' + x(date(last)) + ',' + y(temperature(last)) + ')';
  }
}
function flatten(value) {
  return [].concat.apply([], value.map(values));
}
function values(d) {
  return d.values;
}
function name(d) {
  return d.name;
}
function date(d) {
  return d.date;
}
function temperature(d) {
  return d.temperature;
}
