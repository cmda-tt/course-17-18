# Donutchart

Dit is een donutchart die een visualisatie weergeeft van de populaties van verschillende leeftijdsgroepen groepen met mooie kleuren gebaseerd op een bl.ock door @mbostock (GPL-3.0).
___

## Preview
![](https://github.com/maroeska/course-17-18/blob/style/site/class-2-style/maroeska/preview.png)

## Achtergrond

HTML: body tag aan het einde afgesloten & tabs gebruikt als iets is genesteld
```html
<!DOCTYPE html>
<meta charset=utf8>
<title>@maroeska</title>
<link rel=stylesheet href=index.css>
<body>
    <script src=https://d3js.org/d3.v4.min.js></script>
    <script src=index.js></script>
</body>
```

CSS: waardes op alfabetische volgorde gezet en afgesloten met ;<br>
Voorbeeld uit code:
```css
html {
    background-color: currentcolor;
    color: #000;
    max-width: 100%;
}
```

Javascript: delen in blokken onder elkaar gezet en afgesloten met ;<br>
Voorbeeld uit code:
```javascript
function render(b, c) {
    if (b) throw b;
    
    var a = svg
        .selectAll('.arc')
        .data(pie(c))
        .enter()
        .append('g')
        .attr('class', 'arc');
```        
## License

GPL-3.0 © Maroeska Verkerk

