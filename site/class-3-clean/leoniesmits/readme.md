# Clean

In this challenge we had to clean up some data to later use it in d3js.

## Changes I made

* First, I compared the `.txt` file to the `example.json` file. The only information I needed to pattern out this format, were the locations, tempertures and data (specific to the seconds). I needed 'STN' and 'YYYYMMDD' to get these numbers.
* After being hopeless and miserable, I saw some examples in the assignment page. Got a good look at the code, tho.

#### Clean up:
* Use `.indexOf()` to search for strings, to select characters in the code and store them.
* Save the labels in `var = header`, slice this off with `.slice(header)`.
* Use `.replace(/ +/g, '')` to replace all spaces to nothing, so it's readable.
* Use `.replace` again, to replace # with nothing.
* Use `d3.timeParse("%Y%m%dT%H:%M:%S.%LZ")` to create a time parser. For some reason this didn't work with `d3.timeParse('%Y%m%d')`. Got some info on this [here](https://github.com/d3/d3-time-format).
* use `var = places` to store the rows as csv with `d3.csvParseRows(doc, map)
* Then, return location, date and temperture in proper units. 
* use d3.nest to return var = places and put the new data (proper units) in this var.


## Data

The data originates from [kmni.nl](https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi) where I picked  `260 De Bilt`, `285 Huibertgat`, `240 Schiphol` and `380 Maastricht`. By downloading this dataset, we got a .txt file that had a lot of information. Besides the temperature, we got the hourly wind speed, duration of sunshine and so on. Quite a challenge to cut out all this information and store this in the right variables.

## Features

* [`d3.nest`](http://learnjsdata.com/group_data.html) - produce groupings to use in data analyse
* [`d3.csvParseRows`](https://github.com/d3/d3-dsv#dsv_parseRows) - parses string in csv format
* [`d3.timeParse`](https://github.com/d3/d3-time-format) - parses time in location specific format

## Licence 

MIT © Leonie Smits
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

