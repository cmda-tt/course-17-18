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
  .mimeType('text/plain;charset=iso88591')
  .get(onload);

function onload(err, doc) {
  if (err) throw err;

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

	var header = doc.indexOf('STN,YYYYMMDD');
	var end = doc.indexOf('\n', header);
	doc = doc.slice(end).trim();
	doc = doc.replace(/ +/g, ''); //Replaces spaces with empty space
	doc = doc.replace('#',''); //Removes hashtags with empty space
	doc = doc.trim(''); //Removes empty spaces

	// A test to remove the first hashtag on all arrays
	// for (i = 0; i < data.length; i++) {
    // 	data[i].shift();
	// }

	var places = []; //Creates var places

	var parseTime = d3.timeParse("%Y%m%dT%H:%M:%S.%LZ"); //Notes the time format
	places = d3.csvParseRows(doc, map); //Places the data into the variable
  		function map(d) {

			if (d[7] === "") { // Adds a console log notification if there weren't any temperature measurements
				console.log("There weren't any temperature measures on " + parseTime(d[1].concat('T',d[2],':00:00.000Z')) + " at " + knmiCodes[d[0]]);
				return;
			}

	    	return { //Creates three properties: date, temp and name with their corresponding values
				date: parseTime(d[1].concat('T',d[2],':00:00.000Z')), //Uses the time format established on top and adds multiple data together (day and time)
	    		temperature: Number(d[7] / 10), //Divides the temperature by 10
				name: knmiCodes[d[0]] //Matches the ID to the knmiCodes variable to get a name
	  		};
  	}

	// My console logs throughout the assignment
  	// console.log(places[13]);
  	// console.log(doc);

	places = d3.nest() //Adds the data to the chart and tells d3 which data to use on what axis
		.key(function(d) { return d.name; })
		.entries(places)
		.map(function(group){
			return{
				name: group.key,
				values: group.values
			};
		});

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
