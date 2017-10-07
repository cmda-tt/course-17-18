var csvTag = document.createElement("H1");
var csvHeader = document.createTextNode("Dinners from CSV");
csvTag.appendChild(csvHeader);
document.body.appendChild(csvTag);

var csvContainer = document.createElement("DIV");
document.body.appendChild(csvContainer);
csvContainer.id = "csvContainer";

var jsonTag = document.createElement("H1");
var jsonHeader = document.createTextNode("Dinners from JSON");
jsonTag.appendChild(jsonHeader);
document.body.appendChild(jsonTag);

var jsonContainer = document.createElement("DIV");
document.body.appendChild(jsonContainer);
jsonContainer.id = "jsonContainer";

d3.csv('index.csv', function (err, questions) {
  if (err) throw err;
  questions.forEach(function (q) {

	csvContainerSelect = document.querySelector("#csvContainer");

	// Dag aanmaken in een H2
	var dayTagCsv = document.createElement("H2");
	var dayDataCsv = document.createTextNode(q.day);
	dayTagCsv.appendChild(dayDataCsv);
	csvContainerSelect.appendChild(dayTagCsv);

	// Dinner aanmaken in een P
	var dinnerTagCsv = document.createElement("P");
	var dinnerDataCsv = document.createTextNode(q.dinner);
	dinnerTagCsv.appendChild(dinnerDataCsv);
	csvContainerSelect.appendChild(dinnerTagCsv);
});
});

d3.json('index.json', function (err, questions) {
  if (err) throw err;
  questions.forEach(function (q) {

	jsonContainerSelect = document.querySelector("#jsonContainer");

	// Dag aanmaken in een H2
	var dayTagJson = document.createElement("H2");
	var dayDataJson = document.createTextNode(q.day);
	dayTagJson.appendChild(dayDataJson);
	jsonContainerSelect.appendChild(dayTagJson);

	// Dinner aanmaken in een P
	var dinnerTagJson = document.createElement("P");
	var dinnerDataJson = document.createTextNode(q.dinner);
	dinnerTagJson.appendChild(dinnerDataJson);
	jsonContainerSelect.appendChild(dinnerTagJson);
});
});
