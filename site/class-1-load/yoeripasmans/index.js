d3.json('./index.json', function(err, day) {
  if (err) throw err;
  day.forEach(function(q) {
    var tablebody = document.querySelector('.tbody-json');
    var tr = document.createElement('tr');
    var day = document.createElement('td');
    var dinner = document.createElement('td');

    tablebody.appendChild(tr);
    tr.appendChild(day);
    tr.appendChild(dinner);

    day.textContent = q.day;
    dinner.textContent = q.dinner;
  });
});

d3.csv('./index.csv', function(err, day) {
  if (err) throw err;
  day.forEach(function(q) {
    var tablebody = document.querySelector('.tbody-csv');
    var tr = document.createElement('tr');
    var day = document.createElement('td');
    var dinner = document.createElement('td');

    tablebody.appendChild(tr);
    tr.appendChild(day);
    tr.appendChild(dinner);

    day.textContent = q.day;
    dinner.textContent = q.dinner;
  });
});
