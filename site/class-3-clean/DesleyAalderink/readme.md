![Alt text][cover]


# Clean me!

For this assignment I had to load, clean, and transform data so it can be used in a line chart.

## Data I used

I took data from the following weather stations:

* Hoek van Holland
* De Bilt
* Marknesse
* Huibertgat

## What I did

It started pretty basic. Just follow the slides till the end. After the end, well...it was struggling. Trying to display everything was
more difficult than I thought. I started with getting rid of the hastag. I just used the `replace` code which I used earlier
for getting rid of empty spaces and used it with a hashtahh. Than I started with changing the ParseTime to more than just the time and date. I made it that it must show the year, month, day, hour, minute, seconds and milliseconds. I also changed the var data to var places, so I can fill it up with the data from the parsed data. The next step was modyfiying the `function map`, so it will display the correct information. This one was Tricky and I had to look it up to how my classmates handled this (shoutout to them), but this is how it works: First I made a if statement for if the 7nd row doesn't contain any information than don't display it at all. After that I declared the KNMI codes. With the `concat` code I combined the row `Time` with `Parsetime`, so I can return the right time. After that I returned the temperature. After that I made a variable in which I made everything connect thanks to the `key` and `values`. I thought I was done, but than I found out it only showed two lines instead of three? after a hour of searching I finally found the problem...I forgot to delete an old code which sliced the header.

## Features

*  [ParseRows](https://github.com/d3/d3-dsv#csvParseRows)
*  [timeParse](https://github.com/d3/d3-time-format#timeParse)
*  [nest](https://github.com/d3/d3-collection/blob/master/README.md#nest)

## License

GPL-3.0 © Desley Aalderink


[cover]: preview.png
