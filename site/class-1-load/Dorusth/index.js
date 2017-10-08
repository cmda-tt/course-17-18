//inladen van de csv
d3.csv('./index.csv', pushCsv );
// d3.json('./index.json', pushJson );


//verkorting van het selecteren van het body element
var body = document.body;

function pushCsv(err, data) {
	if (err) throw err;
	//maak een child element in de body dat een h2 is met de tekst CSV hierin
	body.appendChild(document.createElement('h2')).textContent = "CSV"
	//maak voor iedere rij in je csv van het object in de "day" collom een h3 en voor het object in de "Dinner" collom een P
	data.forEach(function (row) {
		body.appendChild(document.createElement('h3')).textContent = row.Day;
		body.appendChild(document.createElement('p')).textContent = row.Dinner;
	})
}

// function pushJson(err, data) {
// 	if (err) throw err;
// 	body.appendChild(document.createElement('h2')).textContent = "JSON"
//     data.forEach(function (row) {
//  	body.appendChild(document.createElement('h3')).textContent = row.Day;
//  	body.appendChild(document.createElement('p')).textContent = row.Dinner;
// 	})
// }
