
// Function met het aanmaken van de SVG elementen
function render(b,c){
	if(b)throw b;
	var a=svg.selectAll('.arc').data(pie(c)).enter().append('g').attr('class','arc');
	a.append('path')
	.attr('d',arc)
	.style('fill',fill),
	a.append('text')
	.attr('transform',transform)
	.attr('dy','.35em')
	.text(age)
}
//  Number population uit data set halen
function type(a){
	return a.population=Number(population(a)),a
}

// Nummer vertalen naar de gebruikte schaal
function transform(a){
	return'translate('+arc.centroid(a)+')'
}

// Vul de bar in de color schaal met de data van age
function fill(a){
	return color(age(a))
}

//Vul het gebied met text (age) als label
function age(a){
	return a.data.age
}

// haal population uit dataset
function population(a){
	return a.population
}


// Gebied aanmaken, en met wiskunde de schaal bepalen ?
var width=500,height=500,radius=Math.min(width,height)/2,colors=['hsl(45, 99%, 59%)','hsl(96, 99%, 59%)','hsl(148, 99%, 59%)','hsl(199, 99%, 59%)','hsl(250, 99%, 59%)','hsl(302, 99%, 59%)','hsl(353, 99%, 59%)'],color=d3.scaleOrdinal()
	.range(colors),arc=d3.arc() // colors aanpasssen met de schaal
	.outerRadius(radius-16) // d3 pie met een buitenste radius van 17
	.innerRadius(radius-128),pie=d3.pie() // d3 pie met een binnenste radius van 128
	.sort(null)
	.value(population),svg=d3.select('body') //svg in body plaatsen
	.append('svg')	//svg selecteren
	.attr('width',width)	// in de attribute de eerder gemaakte val width plaatsen
	.attr('height',height) // in de attribute de eerder gemaakte val height plaatsen
	.attr('viewBox',[0,0,width,height] // viewbox aanpassen
	.join(' ')).append('g')
	.attr('transform','translate('+width/2+','+height/2+')'); // attribute transform delen door twee en translate delen door 2
	d3.csv('index.csv',type,render) //d3 database connectie
