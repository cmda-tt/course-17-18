# Debug
Bij deze opdracht was het de bedoeling om bugs te vinden in de code en deze dan te veranderen

![picture](preview.png)

## The fix
### HTML:
1. De html opmaak was niet goed, zo was de code zonder een header. Ik heb dit gefixt door de normale html opmaakt toe te passen.
2. De linkjes heb ik daarnaast ook in "" gedaan, dit was eerst niet zo

### CSS:

1. De twee 100v verandert naar 100vw en 100vh
2. fill: no verandert naar fill none;

### Js:

1. TSV verandert naar CSV
2. extend veranderd naar extent
3. viewbox attri op een lijn gedaan
4. de afkorting l, r .etc verandert  naar left, right, top bottom
5. svg stijl afgesloten met een ';'

### Van D3.v3 naar D3.v4
1. De link de van <script src="https://d3js.org/d3.v3.min.js"></script> veranderen naar <script src="https://d3js.org/d3.v4.min.js"></script>
2. scale.linear veranderd naar scaleLinear
3. scale.ordinal veranderd naar scaleOrdinal
4. axis().scale(y) en axis().sacle(x) veranderd naar axisBottom(x) en AxisBottom(y)

## Features

*   [`d3.scale.linear`](https://github.com/d3/d3-3.x-api-reference/blob/master/Quantitative-Scales.md#_linear)
*   [`d3.scale.ordinal`](https://github.com/d3/d3-3.x-api-reference/blob/master/Ordinal-Scales.md#ordinal)
*   [`d3.svg.axis`](https://github.com/d3/d3-3.x-api-reference/blob/master/SVG-Axes.md#axis)
*   [`d3.extent`](https://github.com/d3/d3-3.x-api-reference/blob/master/Arrays.md#d3_extent)
*   [`d3.csv`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md#csv)

## License

GPL-3.0 © Chanakarn Niyornram

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-2-debug/niyorn
