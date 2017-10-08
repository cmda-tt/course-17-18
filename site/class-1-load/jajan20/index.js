d3.json('/index.json', function (err, json) {

	var paragraph = document.getElementsByTagName("p")[0];
	for (var i = 0; i < json.length; i++) {
		var h3 = document.createElement("h3");
		h3.innerHTML = json[i].date;
		paragraph.appendChild(h3);
		var p = document.createElement("p");
		p.innerHTML = json[i].dinner;
		paragraph.appendChild(p);
	}

  if (err) throw err;
    console.log(json)
});

var csv = d3.csv('./index.csv', function (err, csv) {
  if (err) throw err;
    console.log(csv)
});

