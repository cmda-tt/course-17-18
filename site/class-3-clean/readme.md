# Clean
## Temperaturen grafiek van plaatsen in Nederland

Deze grafiek is gemaakt vanuit gegevens vanuit 4 weerstations.
Deze data komt van [KNMI](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi) en heb ik moeten opschonen zodat deze in de grafiek te zien is. Om dit voor elkaar te krijgen heb ik stappen uit de slides gevolgd. Hiermee ben ik een heel eind gekomen.

![preview][cover]

## Data
De data die ik gebruikt heb komt van [KNMI](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi). Daar heb ik 4 weerstations gekozen.

* 240 Schiphol
* 260 De Bilt
* 269 Lelystad
* 285 Huibertgat

## Features
* [ParseRows](https://github.com/d3/d3-dsv#csvParseRows)
*  [timeParse](https://github.com/d3/d3-time-format#timeParse)
*  [nest](https://github.com/d3/d3-collection/blob/master/README.md#nest)

## License
GPL-3.0&copy; Nathan Keyzer

[cover]: preview.png
