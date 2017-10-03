/* global loadLiquidFillGauge, liquidFillGaugeDefaultSettings */
/* eslint no-unused-vars: "off" */
// Original: http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6

// loadLiquidFillGauge heeft 3 parameters waarvan de laatse optioneel is
// De eerste is de ID van de tartet
// De tweede is de start value
// De derde is optioneel, dit om de default (+ eigen) settings mee te geven
const gauge1 = loadLiquidFillGauge( 'fillgauge1', 55 )

// liquidFillGaugeDefaultSettings zegt zoals de naam al doet denken de default settings
// Deze worden later overschreden door je eigen settings
const config1 = liquidFillGaugeDefaultSettings()

config1.circleColor = '#FF7777'
config1.textColor = '#FF4444'
config1.waveTextColor = '#FFAAAA'
config1.waveColor = '#FFDDDD'
config1.circleThickness = 0.2
config1.textVertPosition = 0.2 // lineheight voor de text
config1.waveAnimateTime = 1000 // Snelheid van animatie

const gauge2 = loadLiquidFillGauge( 'fillgauge2', 28, config1 )
const config2 = liquidFillGaugeDefaultSettings()

config2.circleColor = '#D4AB6A'
config2.textColor = '#553300'
config2.waveTextColor = '#805615'
config2.waveColor = '#AA7D39'
config2.circleThickness = 0.1
config2.circleFillGap = 0.2
config2.textVertPosition = 0.8
config2.waveAnimateTime = 2000
config2.waveHeight = 0.5 // hoogte van de waves
config2.waveCount = 2 // aantal waves

const gauge3 = loadLiquidFillGauge( 'fillgauge3', 60, config2 )
const config3 = liquidFillGaugeDefaultSettings()

config3.textVertPosition = 0.8
config3.waveAnimateTime = 5000
config3.waveHeight = 0.15
config3.waveAnimate = true
config3.waveOffset = 0.25
config3.valueCountUp = false
config3.displayPercent = false // Dus geen procent teken

const gauge4 = loadLiquidFillGauge( 'fillgauge4', 50, config3 )
const config4 = liquidFillGaugeDefaultSettings()

config4.circleThickness = 0.15
config4.circleColor = '#808015'
config4.textColor = '#555500'
config4.waveTextColor = '#FFFFAA'
config4.waveColor = '#AAAA39'
config4.textVertPosition = 0.8
config4.waveAnimateTime = 1000
config4.waveHeight = 0.05
config4.waveAnimate = true
config4.waveRise = false // Of de wave word in geanimeerd bij het inladen
config4.waveHeightScaling = false
config4.waveOffset = 0.25
config4.textSize = 0.75
config4.waveCount = 3

const gauge5 = loadLiquidFillGauge( 'fillgauge5', 60.44, config4 )
const config5 = liquidFillGaugeDefaultSettings()

config5.circleThickness = 0.4
config5.circleColor = '#6DA398'
config5.textColor = '#0E5144'
config5.waveTextColor = '#6DA398'
config5.waveColor = '#246D5F'
config5.textVertPosition = 0.52
config5.waveAnimateTime = 5000
config5.waveHeight = 0
config5.waveAnimate = false
config5.waveCount = 2
config5.waveOffset = 0.25
config5.textSize = 1.2
config5.minValue = 30
config5.maxValue = 150
config5.displayPercent = false

const gauge6 = loadLiquidFillGauge( 'fillgauge6', 120, config5 )

function NewValue() {

	if ( Math.random() > 0.5 ) { // als hoger dan 0.5 geen decimaal getal

		return Math.round( Math.random() * 100 ) // getal tussen 0 en 100

	}

	return ( Math.random() * 100 ).toFixed( 1 ) // als kleiner dan 0.5 een decimaal getal

}

const svg = document.querySelectorAll( 'svg' ),
	allGauges = [gauge1, gauge2, gauge3, gauge4, gauge5, gauge6]

for ( let i = 0; i < svg.length; i++ ) {

	svg[i].addEventListener( 'click', function() {

		allGauges[i].update(NewValue())

	})

}
