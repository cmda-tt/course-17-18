d3.json('./index.json', function (err, questions) {
  if (err) throw err;
  var jsonHeader = document.createElement("h1");
  var jsonHeaderText = document.createTextNode("JSON Dinner list!");
  jsonHeader.appendChild(jsonHeaderText);
  document.body.appendChild(jsonHeader);

  questions.forEach(function (q) {
    console.log('From: CSV\nQuestion: %s\nAnswer: %s', q.day, q.dinner);
    
    var day = document.createElement('h3');
    day.textContent = q.day; 
    document.body.appendChild(day);

    var dinner = document.createElement('h4');
    dinner.textContent = q.dinner; 
    document.body.appendChild(dinner);
  })
})

d3.csv('./index.csv', function (err, questions) {
  if (err) throw err;
  var csvHeader = document.createElement("h1");
  var csvHeaderText = document.createTextNode("CSV Dinner list!");
  csvHeader.appendChild(csvHeaderText);
  document.body.appendChild(csvHeader);

  questions.forEach(function (q) {
    console.log('From: CSV\nQuestion: %s\nAnswer: %s', q.day, q.dinner);
    
    var day = document.createElement('h3');
    day.textContent = q.day; 
    document.body.appendChild(day);

    var dinner = document.createElement('h4');
    dinner.textContent = q.dinner; 
    document.body.appendChild(dinner);
  })
})