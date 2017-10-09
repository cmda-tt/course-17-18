// Copyright 2013 Peter Cook @prcweb prcweb.co.uk
// Original http://charts.animateddata.co.uk/uktemperaturelines/

const chart = {

	data: null,
	xScale: null,
	yScale: null,
	svgLine: null,
	colorScale: null,

	perspectiveOffsetX: 5,
	perspectiveOffsetY: 4.5,

	chartHeight: 500,
	lineWidth: 600,
	lineHeight: 150,

	bodyHeight: 4000, // Scroll height
	windowHeight: 0,
	scrollScale: null,

	menu: [
		{ 'label': 'Year', 'sortBy': 'year' },
		{ 'label': 'Maximum', 'sortBy': 'max' },
		{ 'label': 'Minimum', 'sortBy': 'min' },
		{ 'label': 'Mean', 'sortBy': 'mean' }
	],

	uiState: {
		selectedIndex: 0,
		selectedDatum: null,
		sortBy: 'year',
		sorting: false
	},

	sortFunction: {},
	openingTimer: null,


	translate: ( x, y ) => `translate( ${x}, ${y} )`,

	init: function() {

		const data = {}

		// Krijg de benodigde data (Array met Objects)
		let	dataset = []
		for ( const el in this.data.meanTemp ) {

			const data = this.data.meanTemp[ el ],
				yearAve = data.reduce( ( m, v ) => ( m + v ), 0) / 12,
				yearMax = d3.max( data ),
				yearMin = d3.min( data )

			dataset.push({ year: parseInt( el ), data: data, mean: yearAve, max: yearMax, min: yearMin })
		}

		this.data.meanTemp = { data: dataset.reverse() , extent: [-2, 16] }


		d3.select( 'body' ).style( 'height', `${this.bodyHeight}px`)
		this.windowHeight = window.innerHeight
		// de scale voor de scroll
		this.scrollScale = d3.scaleLinear().domain([  0, this.bodyHeight - this.windowHeight * 0.99  ]).range([  0, 102  ]).clamp( true )

		this.sortFunction.year = ( a, b ) => d3.descending( a.year, b.year )
		this.sortFunction.mean = ( a, b ) => d3.descending( a.mean, b.mean )
		this.sortFunction.max = ( a, b ) => d3.descending( a.max, b.max )
		this.sortFunction.min = ( a, b ) => d3.ascending( a.min, b.min )

		this.initChart()
		this.initEvents()
		this.initMenu()

	},

	initMenu: function() {

		const that = this

		d3.select( '#menu' )
			.text( 'Sort by: ' )
			.selectAll( 'span' )
			.data( this.menu )
			.enter()
			.append( 'span' )
			.html( ( d, i ) => {

				let html = `<span class='button'>${d.label}</span>`
				if ( i < that.menu.length - 1 ) html += ' / '

				return html // Zet alle "menu" items

			})

		// Handel de click op de menu items
		d3.select( '#menu' )
			.selectAll( 'span.button' )
			.classed( 'selected', ( d, i ) => i === 0 )
			.on( 'click', function() {

				const d = d3.select( this.parentNode ).datum() // Om te checken hoe het nu gesorteerd moet worden

				d3.selectAll( '#menu span.button' )
					.classed( 'selected', false )

				d3.select( this )
					.classed( 'selected', true )

				that.updateSort( d.sortBy ) // Het sorteren

			})

	},

	initChart: function() {

		const that = this

		// Zet alle scales voor de assen, de kleur en zet de line
		this.xScale = d3.scaleLinear()
			.domain([ 0, 11 ])
			.range([ 0, this.lineWidth ])

		this.yScale = d3.scaleLinear()
			.domain( this.data.meanTemp.extent )
			.range([ this.lineHeight, 0 ])

		this.colorScale = d3.scaleLinear()
			.domain([ 0, 102 ])
			.range([ 1, 0.5 ])

		this.svgLine = d3.line()
			.x( ( d, i ) => that.xScale( i ) )
			.y( d => that.yScale( d ) )
			.curve( d3.curveBasis )


		const years = d3.select( '#chart svg' )
			.append( 'g' )
			.classed( 'years', true )
			.attr( 'transform', this.translate( 30, this.chartHeight ) )
			.selectAll( 'g.year' )
			.data( this.data.meanTemp.data )
			.enter()

			.append( 'g' )
			.attr( 'class', (d, i) => `year-${d.year}` )
			.classed( 'year', true )
			.sort( this.sortFunction[ this.uiState.sortBy ])
			.attr( 'transform', ( d, i ) => that.translate( i * that.perspectiveOffsetX, -i * that.perspectiveOffsetY ) )
			.style( 'opacity', ( d, i ) => that.colorScale( i ) )

		// Add paths
		const path = years.append( 'path' )
			.attr( 'd', ( d, i ) => that.svgLine( d.data ) ),

			pathLength = path.node().getTotalLength()

		path.attr( 'stroke-dasharray', `${pathLength} ${pathLength}` )
			.attr( 'stroke-dashoffset', pathLength )
			.transition()
				.duration( 5000 )
				.ease( d3.easePolyOut )
				.attr( 'stroke-dashoffset', 0 )

		// Base and end lines
		years.append( 'line' )
			.classed( 'base', true )
			.attr( 'x1', 0 )
			.attr( 'y1', this.yScale( 0 ) )
			.attr( 'x2', this.xScale( 11 ) )
			.attr( 'y2', this.yScale( 0 ) )

		years.append( 'line' )
			.classed( 'start', true )
			.attr( 'x1', 0 )
			.attr( 'y1', this.yScale( 0 ) )
			.attr( 'x2', 0 )
			.attr( 'y2', d => that.yScale( d.data[ 0 ] ) )

		years.append( 'line' )
			.classed( 'end', true )
			.attr( 'x1', this.xScale( 11 ) )
			.attr( 'y1', this.yScale( 0 ) )
			.attr( 'x2', this.xScale( 11 ) )
			.attr( 'y2', d => that.yScale( d.data[ 11 ] ) )

		years.append( 'text' )
			.classed( 'label', true )
			.attr( 'x', this.xScale( 11 ) + 5 )
			.attr( 'y', this.yScale( 0 ) )
			.text( d => d.year )
			.each( function( d ) {

				if (!that.data.info[ d.year  ]) return

				const color = that.data.info[ d.year ].class === 'hot' ? 'indianred' : 'steelblue'
				d3.select( this )
					.style( 'opacity', 1 )
					.style( 'font-weight', '100' )
					.style( 'fill', color )

			})

		d3.select( '#chart svg' )
			.append( 'g' )
			.classed( 'axes', true )
			.attr( 'transform', this.translate( 30, this.chartHeight ) )

		this.renderAxes()

	},

	updateVisibleYears: function() {

		const that = chart

		const index = that.uiState.selectedIndex // Index van de jaren
		const years = d3.selectAll( '#chart .years g.year' )
		years.classed( 'hover', false ) // Class weghalen

		years.filter( ( d, i ) => i === index ) // Zet op de huidige index de class hover
			.classed( 'hover', true )

		d3.selectAll( '.axes' ) // Geef de "Axis" (de as van de temperatuur en de maanden) zijn nieuwe positie
			.attr( 'transform', that.translate( 30 + index * that.perspectiveOffsetX, that.chartHeight + that.yScale( 0 ) + -index * that.perspectiveOffsetY ) )

		years.style( 'opacity', ( d, i ) => {

				if ( i < index ) return 0 // Voor de jaren voor de index, geef ze een opacity van 0
				return that.colorScale( i ) // Geef de rest zijn kleur (Op deze manier sloop je niks bij terug scrollen)

			})

		const datum = years.filter( ( d, i ) => i === index ).datum()
		that.uiState.selectedDatum = datum

		that.updateInfo()

	},

	updateInfo: function() {

		const that = chart
		const d = that.uiState.selectedDatum
		let html = `<h2>${d.year}</h2>
				${that.data.info[ d.year ] ? that.data.info[ d.year ].text : ''}
				<p>Hottest month: ${d.max}&degC</p>
				<p>Coolest month: ${d.min}&degC</p>
				<p>Year average: ${d.mean.toFixed( 1 )}&degC</p>` // Zet de nieuwe data in de "Widget"

		d3.select( '#info' )
			.html( html )

	},

	handleScroll: function() {

		const that = chart
		if ( that.uiState.sorting ) return // Stop als er geen data meer is

		const scroll = ( window.pageYOffset || document.body.scrollTop ) - ( document.body.clientTop || 0 ) // Check hoeveel er gescrolled is
		that.uiState.selectedIndex = Math.round( that.scrollScale( scroll ) )
		that.updateVisibleYears()

	},

	initEvents: function() {

		// Plaats de events op de window
		window.addEventListener( 'scroll', this.handleScroll )
		window.addEventListener( 'touchmove', this.handleScroll )

	},


	renderAxes: function() {

		const monthScale = d3.scaleOrdinal()
			.domain([ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ])
			.range([ 0, this.lineWidth ])

		const yAxis = d3.axisLeft() // Zet de linker scale
			.scale( this.yScale )
			.tickValues([ 0, 2, 4, 6, 8, 10, 12, 14, 16 ])

		d3.select( '#chart .axes' )
			.append( 'g' )
			.classed( 'axis y', true )
			.attr( 'transform', this.translate( 0, -this.yScale( 0 ) ) )
			.call( yAxis ) // Plaats de axes

		const xAxis = d3.axisBottom()
			.scale( monthScale )

		d3.select( '#chart .axes' )
			.append( 'g' )
			.classed( 'axis x', true )
			.call( xAxis )// Plaats de axes

	},

	updateSort: function( sortBy ) {

		const that = this
		this.uiState.sortBy = sortBy // Sla de huidige (of nieuwe net hoe je het bekijkt) sorteer manier op

		// Sorteren op jaar
		const years = d3.select( '#chart .years' )
			.selectAll( 'g.year' )
			.sort( this.sortFunction[ this.uiState.sortBy ] ) // Sorteren aan de hand van hoe het rond regel 70 beschreven was

		// Krijg de huidige index
		d3.selectAll( '#chart .years g.year' )
			.each( ( d, i ) => {

				if (d.year === that.uiState.selectedDatum.year) index = i

			})

		that.uiState.selectedIndex = index

		// Transform the axes
		d3.selectAll( '.axes' )
			.transition()
			.duration( 2000 )
			.attr( 'transform', that.translate( 25 + index * that.perspectiveOffsetX, that.chartHeight + that.yScale( 0 ) + -index * that.perspectiveOffsetY ) )
			.on( 'end', () => {

				that.uiState.sorting = false

			})

		d3.selectAll( '#chart .years .year' )
			.transition()
			.duration( 2000 )
			.attr( 'transform', ( d, i ) => that.translate( i * that.perspectiveOffsetX, -i * that.perspectiveOffsetY ) )
			.style( 'opacity', ( d, i ) => {

				if ( i < index ) return 0
				return that.colorScale( i )

			})

		// Reset de scroll
		this.uiState.sorting = true
		window.scrollTo( this.scrollScale.invert( index ), 0 )
	}
}

d3.json( 'temp.json', temperatureData => {

	chart.data = temperatureData
	chart.init()
	chart.updateVisibleYears()

})
