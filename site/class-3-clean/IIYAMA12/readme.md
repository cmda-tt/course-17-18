
# Clean


## Data
The data comes from the index.txt file. The target file was meant for the .csv format, but because of the comments and spaces it would fail to load by default.


Loading of the data is achieved by skipping the comments: (using a function to skip it)
``` javascript
var header = doc.lastIndexOf("#");
```

The comments are removed with this line:
``` javascript
doc = doc.slice(header + 1);
```

So are the spaces around:
``` javascript
doc = doc.slice(doc).trim();
```

And spaces in between:
``` javascript
doc = doc.replace(/ +/g, "");
```  
  

  
  

After the data has been cleaned, converted the values:  

Converted the time:
``` javascript
var parseTime = d3.timeParse('%Y%m%d'); 
```

Converted the temperature:
``` javascript
Number(value) / 10
```

Converted the kmni codes
``` javascript 
knmiCodes[value]
```




## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3884955

[block-author]: https://github.com/mbostock

[Data source](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi)
