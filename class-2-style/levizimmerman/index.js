/* global d3 */
var width  = 500;
var height = 500;
var radius = Math.min(width, height) / 2;
var colors = [
'hsl(45, 99%, 59%)',
'hsl(96, 99%, 59%)',
'hsl(148, 99%, 59%)',
'hsl(199, 99%, 59%)',
'hsl(250, 99%, 59%)',
'hsl(302, 99%, 59%)',
'hsl(353, 99%, 59%)'
];
var color  = d3.scaleOrdinal().range(colors);
var arc    = d3.arc().outerRadius(radius - 16).innerRadius(radius - 128);
var pie    = d3.pie().sort(null).value(population);
var svg    = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height)
.attr('viewBox', [0, 0, width, height].join(' '))
.append('g')
.attr('transform','translate(' + width / 2 + ',' + height / 2 + ')');

d3.csv('./index.csv', populationToNumberType, render);

function render(error, data) {
  if (error) {
    throw error;
  }

  var arcElement = svg.selectAll('.arc')
  .data(pie(data))
  .enter().append('g')
  .attr('class', 'arc');

  arcElement.append('path')
  .attr('d', arc)
  .style('fill', fill);

  arcElement.append('text')
  .attr('transform', transform)
  .attr('dy', '.35em')
  .text(age);
}

/*
* Parses row population amount to number type
*/
function populationToNumberType(row) {
  if (!row) {
    console.error('No row was given to function populationToNumberType');
  }
  return row.population = Number(population(row)), row;
}

/*
* Transforms to position the pie piece
*/
function transform(row) {
  if (!row) {
    console.error('No row was given to function transform');
  }
  return 'translate(' + arc.centroid(row) + ')';
}

/*
* Sets fill color of pie piece based on the age label
*/
function fill(row) {
  if (!row) {
    console.error('No row was given to function fill');
  }
  return color(age(row));
}

/*
* Returns the age of a row
*/
function age(row) {
  if (!row) {
    console.error('No row was given to function age');
  }
  return row.data.age;
}

/*
* Returns population of given row
*/
function population(row) {
  if (!row) {
    console.error('No row was given to function population');
  }
  return row.population;
}
