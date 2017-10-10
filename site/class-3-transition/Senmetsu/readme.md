# Transition
Dit document verklaard mijn process tijdens de opdracht.

![Alt text][cover]

## Proces
Animaties toevoegen o/

## Wat heb ik gedaan?
Animaties toegevoegd aan de piechart.


```JavaScript
d3.selectAll('path')
    .transition()
    .delay(750)
    .duration(500)
    .style('fill','pink')
    .ease(d3.easeBounce)

  d3.selectAll('text')
      .transition()
      .delay(750)
      .duration(500)
      .style('fill','black')
```

## Bronnen:
* https://github.com/d3/d3-ease#elastic_period

## License:
GPL-3.0 © Sam Guliker

[cover]: preview.png
