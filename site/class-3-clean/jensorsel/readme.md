# Cleaning up data

This is the deliverable for the ['clean' assignment](https://github.com/cmda-fe3/course-17-18/blob/master/class-3.md#clean).

## Background

This assignment is part of the course 'Front-end development 3', which is part of the study programme 'Communication & Multimedia Design'. The goal of this assignment is to teach the student how to work with d3, a JavaScript library used for creating datavisualisations.

The point of this assignment is to 'clean up' a dataset using JavaScript. Most datasets that you can find online won't be provided in a way that JavaScript can instantly read. A lot of the time, some tweaks and lines of code are needed to make the dataset work. You could do this manually in the dataset itself by rewriting it, but it's a lot more useful to do in JavaScript, since any newly obtained datasets from the same source can be used with the created code straight away (which saves a lot of time). This also helps a lot with huge datasets (let's say, over 500 entries).

## Tweaks

* The code below is used to chop the 'unnecessary' part of the data off. The dataset lists what you could call a 'legend' at the top, teaching you how to read it. By doing the following, we get rid of everything up to the actual data entries. 
```var header = doc.indexOf('STN,YYYYMMDD')
    var end = doc.indexOf('\n', header)
    doc = doc.slice(end).trim()
    doc = doc.replace(/ +/g, ',')
    var end2 = doc.indexOf('\n', '#')
    doc = doc.slice(end2).trim()
 ```
 * The code below is used to actually load the data in. First of all we decide how the dates in the dataset need to be processed. These are in a `%Y%m%d` format. We're going to store the data in `var places` for now, by using csvParseRows we can create arrays of objects from our .txt file. The function `map()` defines what the values and keys will be in these objects. `knmiCodes[d[1]]` refers the number of the weather station back to the knmiCodes object, and replaces the station's number with its name. The `date: parseTime` line combines the date with the hour. This is why the `var parseTime` has to be updated to `%Y%m%d%H`. Finally, the temperature has to be turned into a `Number`. It is also divided by 10, since the temperatures in the dataset are per 0.1 Celsius.
  ```var parseTime = d3.timeParse("%Y%m%d%H")
    var places = d3.csvParseRows(doc, map)
    function map(d) {
    return {
      name: knmiCodes[d[1]],
      date: parseTime((d[2].concat(d[4]))),
      temperature: (Number(d[14])/10)
    }
  }
```
* Finally, this piece of code is used to group the values per weather station, since the data is going to be used in a multi-line chart. It's taken from [@dipsaus9's code](https://github.com/cmda-fe3/course-17-18/blob/master/site/class-3-clean/dipsaus9/index.html), since I didn't initially know what to do. The `d3.nest()` function is used to group the data that was previously stored in `var places` together. The weather stations' names are used as the keys, the data in places is used as their values. All of these changes combined resulted in working code.
 ```
 places = d3.nest()
   .key(function(d) { return d.name; })
   .entries(places)
   .map(function(group){
        return{
          name: group.key,
          values: group.values
    }
    });
 ```
## License

GPL-3.0 © Titus Wormer (From original)
