// Global vars
const width = 960;
const height = 960;
const transDuration = 1000;
const transDurationShort = 500;
const delayTime = 50;
const easeStyle = d3.easeElasticOut;


const svg = d3.select('svg')
	.attr('width', width)
	.attr('height', height);

const format = d3.format(',d');
// d = Decimal rounded to integer / ignores not integer values
// , = thousands seperator

const colorSet = d3.scaleOrdinal(d3.schemeCategory20c); // Returns a set color scheme of d3 of category c20

// Creates a new circle packing layout (e.g circle constiant of scaleLinear ect.)
const packLayout = d3.pack()
	.size([width, height])
	.padding(1.5);

function renderChart(error, classes) {
	if (error) throw error;
	
	// hierarchy varructs a root node from hierarchical data
	const root = d3.hierarchy({ children: classes })
		.sum(d => d.value) // This method ignores undefined and NaN values
		.each(d => {
			if (id = d.data.id) { // Changes the data for some reason
				var id, i = id.lastIndexOf('.');
				d.id = id;
				d.package = id.slice(0, i); // Gets the whole id of the row
				d.class = id.slice(i + 1); // Gets the last item of the nested id value
			}
		});
			
	const nodeGroup = svg.selectAll('.node')
		.data(packLayout(root).leaves()) 
		.enter()
		.append('g')
			.attr('class', 'node')
			.attr('transform', d => `translate(${d.x},${d.y})`);

	// ENTER/APPEND CIRCLE
	nodeGroup.append('circle')
		.attr('id', d => d.id)
		.attr('r', d =>  0)
		.style('fill', '#fff' )
		.on('mouseover', handleMouseOver)
		.on('mouseout', handleMouseOut)
			.transition()
			.delay(transDelay)
			.duration(transDuration)
			.ease(easeStyle)
			.style('fill', d => colorSet(d.package))
			.attr('r', d =>  d.r)


	nodeGroup.append('clipPath')
		.attr('id', d => `clip-${d.id}`)
		.append('use')
			.attr('xlink:href', d => `#${d.id}`);
	
	nodeGroup.append('text')
		.attr('clip-path', d => `url(#clip-${d.id})`)
		.attr('class', 'node-label')
		.selectAll('tspan')
		.data(d => d.class.split(/(?=[A-Z][^A-Z])/g))
		.enter()
		.append('tspan')
			.attr('x', 0)
			.attr('y', (d, i, nodes) => 27 + (i - nodes.length / 2 - 0.5) * 20)
			.text(d => d);
	
	nodeGroup.append('title')
		.text(d => `${d.id}\n${format(d.value)}`);

	/*=================
	=== mouse event (over circle)
	=================*/
	function handleMouseOver() {
		d3.select(this)
			.transition()
			.duration(transDurationShort)
			.ease(easeStyle)
			.attr('r', this.getAttribute('r') * 1.2);
	}

	function handleMouseOut() {
		d3.select(this)
			.transition()
			.duration(transDurationShort)
			.ease(easeStyle)
			.attr('r', this.getAttribute('r') / 1.2);
	}
}

// From https://github.com/cmda-fe3/course-17-18/blob/master/site/class-3-transition/wooorm/index.js
function transDelay(d, i) {
	return i * delayTime;
}

// Set for testing switching data
(function set1() {
	d3.csv('data.csv', d => {
		d.value = +d.value; // coercion string => number
		if (d.value) return d;
	}, renderChart);
})();
