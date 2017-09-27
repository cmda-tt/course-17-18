d3.json('./index.json', function (err, day) {
    if (err) throw err;
    day.forEach(function (q) {
        var tableRow = document.createElement('tr');
        var day = document.createElement('td');
        var dinner = document.createElement('td');  
        document.body.appendChild(tableRow);
        document.body.appendChild(day);
        day.textContent = q.day;  
        document.body.appendChild(dinner);
        dinner.textContent = q.dinner;        
      console.log('From: JSON\nday: %s\ndinner: %s', q.day, q.dinner)
    })
  })

  d3.csv('./index.csv', function (err, day) {
    if (err) throw err;
    day.forEach(function (q) {
        var tableRow = document.createElement('tr');
        var day = document.createElement('td');
        var dinner = document.createElement('td');  
        document.body.appendChild(tableRow);
        document.body.appendChild(day);
        day.textContent = q.day;  
        document.body.appendChild(dinner);
        dinner.textContent = q.dinner;    
      console.log('From: CSV\nday: %s\ndinner: %s', q.day, q.dinner)
    })
  })