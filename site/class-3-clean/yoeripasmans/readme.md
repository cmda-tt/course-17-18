# Cleaning Data
For this assignment I've cleaned and transformed data using only Javascript.

![][cover]

## Background
To clean and transform the data I've used different functions of Javascript and D3.
1. Isolate the weather data by slicing out the header
2. Parse the data into a time format
3. Parse the data to a csv format and store it in the variable 'places'
4. Map the right data as properties and return it as an object
5. Group the data by name and values

## Data
I have selected weather data of the 9th of October of the following places:
* Schiphol
* De Bilt
* Lauwersoog.
* Huibertgat

The dataset after downloading can be found in [`index.txt`]

Source: KONINKLIJK NEDERLANDS METEOROLOGISCH INSTITUUT (KNMI)

## Features

### D3
* [`timeParse()`](https://github.com/d3/d3-time-format#timeParse) - Parse string to date object using a format string to convert.
* [`csvParseRows()`](https://github.com/d3/d3-dsv#csvParseRows) - Parse comma seperated string to JSON.

### Javascript

* [`slice()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - Selects a slice from array using a index position.
* [`indexOf()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) - Returns index position of given search value.
* [`join()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - Converts array to string, can specifiy a seperator to join the elements.
* [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - Replaces string element based on given value with another value given as second argument to this function.
* [`trim()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) - Removes whitespace from the begin and end of the string.

## License
[MIT](https://opensource.org/licenses/MIT) &copy; Yoeri Pasmans

[cover]: preview.png
