var h1 = document.createElement("H1"); // Maak een variabele 'h1' aan waarin een aangemaakt h1 element wordt opgeslagen
var title = "Dinners"; // Maak een variabele 'title' aan waar een string in opgeslagen wordt
h1.textContent = title; // Voeg de string uit variabele 'title' toe  als tekst inhoud aan het h1 element
document.body.appendChild(h1); // Voeg de h1 tag met tekst toe aan de body


d3.json('./index.json', function (err, data) { // haal de data op uit het gelinkte Json bestand
  if (err) throw err;
  
  var jsonH2 = document.createElement("H2"); // Maakt een h2 tag met tekst aan en voegt deze toe aan de body
  var jsonTitle = "Dinners loaded from Json:";
  jsonH2.textContent = jsonTitle;
  document.body.appendChild(jsonH2);

  data.forEach(function (q) { // Maakt een loop aan die voor iedere row een keer runt en de waardes als parameter meegeeft

  	var jsonH3 = document.createElement("H3"); // Maakt een h3 tag met tekst aan en voegt hier de waarde uit q.day aan toe
  	var jsonDay = q.day;
  	jsonH3.textContent = jsonDay;
  	document.body.appendChild(jsonH3);         // voegt de h3 toe aan de body

  	var jsonPara = document.createElement("P"); // Maakt een p tag met tekst aan en voegt hier de waarde uit q.dinner aan toe
  	var jsonDinner = q.dinner;
    jsonPara.textContent = jsonDinner;
    document.body.appendChild(jsonPara); // voegt de p toe aan de body
  })
});


d3.csv('./index.csv', function (err, questions) { // doet hetzelfde als bij het Json bestant, alleen dan met een CSV bestand
  if (err) throw err;

	var csvH2 = document.createElement("H2");
  	var csvTitle = "Dinners loaded from CSV:";
 	csvH2.textContent = csvTitle;
  	document.body.appendChild(csvH2);

  questions.forEach(function (q) {

  	var csvH3 = document.createElement("H3");
  	var csvDay = q.day;
  	csvH3.textContent = csvDay;
  	document.body.appendChild(csvH3);

  	var csvPara = document.createElement("P");
  	var csvDinner = q.dinner;
    csvPara.textContent = csvDinner;
    document.body.appendChild(csvPara);
   
  })
});

