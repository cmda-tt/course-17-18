var width = 500,
	height = 500,
	radius = Math.min(width, height) / 2,
	colors = [
		'hsl(45, 99%, 59%)',
		'hsl(96, 99%, 59%)',
		'hsl(148, 99%, 59%)',
		'hsl(199, 99%, 59%)',
		'hsl(250, 99%, 59%)',
		'hsl(302, 99%, 59%)',
		'hsl(353, 99%, 59%)'
	];

var colorScale = d3.scaleOrdinal().range(colors);

var arcSize = d3
	.arc()
	.outerRadius(radius - 16)
	.innerRadius(radius - 128);

var initiatePie = d3
	.pie()
	.sort(null)
	.value(getPopulation);

// Create and append the svg
var createSvg = d3
	.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('viewBox', [0, 0, width, height].join(' '))
	.append('g')
	.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

function renderChart(err, data) {
	if (err) throw err;
	var chart = createSvg
		.selectAll('.arc')
		.data(initiatePie(data))
		.enter()
		.append('g')
		.attr('class', 'arc');

	chart
		.append('path')
		.attr('d', arcSize)
		.style('fill', getFill);

	chart
		.append('text')
		.attr('transform', getTransform)
		.attr('dy', '.35em')
		.text(getAge);
}

function modifyRow(data) {
	return (data.population = Number(getPopulation(data))), data;
}

function getTransform(a) {
	return 'translate(' + arcSize.centroid(a) + ')';
}

function getFill(a) {
	return colorScale(getAge(a));
}

function getAge(a) {
	return a.data.age;
}

function getPopulation(a) {
	return a.population;
}

d3.csv('index.csv', modifyRow, renderChart);
