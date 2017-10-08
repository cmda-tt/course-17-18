# Cleaning Data
In this assignment I will be cleaning data using only Javascript.

![preview](https://github.com/levizimmerman/course-17-18/blob/clean/site/class-3-clean/levizimmerman/preview-line-chart.png?raw=true)

## Background
In this weeks assignment I am going to clean and transform weather data from [KNMI](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi). After cleaning the data, I will transform it to a workable JSON format. Eventually the JSON format can be read by the D3 code and will draw a line chart displaying temperature over time.

## Data
I have selected weather data of the 3rd of October of the following places: 
* [De Kooy](https://www.google.nl/maps/place/Den+Helder+Airport/@52.9208222,4.7818638,17z/data=!3m1!4b1!4m5!3m4!1s0x47cf47ff46d0e927:0x617f8a5bfb20ce73!8m2!3d52.9208222!4d4.7840525).
* [De Bilt](https://www.google.nl/maps/place/De+Bilt/@52.1007361,5.1192279,12z/data=!3m1!4b1!4m5!3m4!1s0x47c668fa96b0d3a7:0x58b182fb08a2c573!8m2!3d52.1092717!4d5.1809676).
* [Hoogeveen](https://www.google.nl/maps/place/Hoogeveen/@52.7195279,6.3295607,11z/data=!3m1!4b1!4m5!3m4!1s0x47c81a91610fbe03:0x5f4a259481cc9ae!8m2!3d52.7286158!4d6.4901002).
* Huibertgat - not found.

The dataset after downloading can be found in [`index.txt`](https://github.com/levizimmerman/course-17-18/blob/clean/site/class-3-clean/levizimmerman/index.txt). The file contains information about the exported data, example below:

```
# BRON: KONINKLIJK NEDERLANDS METEOROLOGISCH INSTITUUT (KNMI)
# Opmerking: door stationsverplaatsingen en veranderingen in waarneemmethodieken zijn deze tijdreeksen van uurwaarden mogelijk inhomogeen! Dat betekent dat deze reeks van gemeten waarden niet geschikt is voor trendanalyse. Voor studies naar klimaatverandering verwijzen we naar de gehomogeniseerde reeks maandtemperaturen van De Bilt <http://www.knmi.nl/klimatologie/onderzoeksgegevens/homogeen_260/index.html> of de Centraal Nederland Temperatuur <http://www.knmi.nl/klimatologie/onderzoeksgegevens/CNT/>.
  ```
  Followed by additional information about the places you have selected:
  ```
  # STN      LON(east)   LAT(north)     ALT(m)  NAME
# 235:         4.781       52.928       1.20  DE KOOY
# 260:         5.180       52.100       1.90  DE BILT
# 279:         6.574       52.750      15.80  HOOGEVEEN
# 285:         6.399       53.575       0.00  HUIBERTGAT
#
  ```
  Furthermore, a legend is included to explain the different columns:
  ```
  # YYYYMMDD = datum (YYYY=jaar,MM=maand,DD=dag);
# HH       = tijd (HH=uur, UT.12 UT=13 MET, 14 MEZT. Uurvak 05 loopt van 04.00 UT tot 5.00 UT;
# DD       = Windrichting (in graden) gemiddeld over de laatste 10 minuten van het afgelopen uur (360=noord, 90=oost, 180=zuid, 270=west, 0=windstil 990=veranderlijk. Zie http://www.knmi.nl/kennis-en-datacentrum/achtergrond/klimatologische-brochures-en-boeken;
...
  ```
  At last the weather data is displayed after the legend and looks like this:
  ```
  # STN,YYYYMMDD,   HH,   DD,   FH,   FF,   FX,    T,  T10,   TD,   SQ,    Q,   DR,   RH,    P,   VV,    N,    U,   WW,   IX,    M,    R,    S,    O,    Y
#
  235,20171003,    1,  290,   90,   90,  150,  142,     ,   98,    0,    0,    0,   -1,10104,   66,    7,   74,   81,    7,    0,    1,    0,    0,    0
  235,20171003,    2,  290,   80,   80,  130,  140,     ,   92,    0,    0,    1,    1,10107,   72,    6,   72,   23,    7,    0,    1,    0,    0,    0
  235,20171003,    3,  290,   80,   80,  140,  142,     ,   96,    0,    0,    0,    0,10109,   69,    7,   73,    3,    7,    0,    0,    0,    0,    0
...
```

To clean and transform the data I have used different functions of Javascript and D3. First of all I tried to isolate the weather data. Using [`Array.prototype.indexOf()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to determine the position within the file. After that I use [`Array.prototype.slice()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to extract the data from the text file. The slice of data is then cleaned up by removing the `#` and `whitespace` using [`Array.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) function. At last I used the [`String.prototype.trim()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) to remove any whitespace at the beginning and end of the string.

The same kind of techniques I used to extract and clean the information about the places. This data is needed to dynamically determine which weather data is bound to which place using the STN (StationNumber) to identify the data row.

## Features

### D3
* [`timeParse()`](https://github.com/d3/d3-time-format#timeParse) - Parse string to date object using a format string to convert.
* [`csvParseRows()`](https://github.com/d3/d3-dsv#csvParseRows) - Parse comma seperated string to JSON.

### Javascript

* [`slice()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - Selects a slice from array using a index position.
* [`indexOf()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) - Returns index position of given search value.
* [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - Splits a string into an array based on given separator.
* [`join()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - Converts array to string, can specifiy a seperator to join the elements.
* [`push()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - Add an element to the end of given array.
* [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - Filters an array based on the callback function's logic.
* [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - Replaces string element based on given value with another value given as second argument to this function.
* [`trim()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) - Removes whitespace from the begin and end of the string.


## License
[MIT](https://opensource.org/licenses/MIT) &copy; Levi Zimmerman
