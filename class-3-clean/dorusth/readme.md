# Clean

The assignment we had to do was about cleaning up data to visualise it.


## Data

We had to use data from the KNMI measurements from 1 day and i chose the following 4 locations:

* De Bilt
* Maastricht
* Twente
* Schiphol

## Changes
For cleaning the data i used the information from the slides.

Selecting the header/comments of the dataset
```
var header = doc.indexOf('STN,YYYYMMDD')
var end = doc.indexOf('\n', header)
```

removing the comments from the dataset
```
doc = doc.slice(end).trim()
```

Remove the # from the dataset
```
doc = doc.replace('#', '').trim();
```

Remove the spaces in the dataset
```
doc = doc.replace(/ +/g, '')
```


Convert the data in the .txt to a JSON like format
```
function map(d) {
	if (d[7] == '') {
		return
	}
	return {
		name: knmiCodes[d[0]], //convert the location code to the corresponding city
		date: parseTime((d[1].concat('T', d[2], ':00:00.000Z'))), //converts the "YYYYMMDD" to a date like "Sun Oct 01 2017 01:00:00"
		temperature: (Number(d[7]) / 10) //the temperature is converted from 0,1 degrees to 1,0 degrees
	}
}
```

## licence

GPL-3.0 © Titus Wormer

Data source
