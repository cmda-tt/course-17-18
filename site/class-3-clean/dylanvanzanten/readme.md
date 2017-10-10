# Clean

A multi-series line chart visualising the temperature of several places in the Netherlands. Original: [`bl.ock`][block] by [**@mbostock**][block-author].

## Background

For this assignment I had to find and cleanup data I got from the [KNMI]. I had to take four datasets and from those 4 I may choose two. I used the following datasets:

* '260 De Bilt'
* '285 Huibertgat'
* '251 Hoorn (Terschelling)'
* '249 Berkhout'

![preview][cover]

## How?

Honestly I really don't know. I've followed the slides from class 3 and went diving in the code. I eventually changed the 'ParseTime' to show not only the time and date, but also the month and year. After that I was making the 'function map' to filter out the correct information to show. This section I was really struggling with, but thanks to some classmates of me (thankyou!) It worked. Inside the map I made a 'concat' code combined with Time and the Parse code, so that it would return the correct time. After that I returned the temperature values.



## License

*  [ParseRows](https://github.com/d3/d3-dsv#csvParseRows)
*  [timeParse](https://github.com/d3/d3-time-format#timeParse)
*  [nest](https://github.com/d3/d3-collection/blob/master/README.md#nest)

[block]: https://bl.ocks.org/mbostock/3887118

[block-author]: https://github.com/mbostock

[KNMI]: http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi

[cover]: preview.png
