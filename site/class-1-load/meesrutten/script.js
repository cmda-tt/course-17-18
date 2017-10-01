const dinnerTable = document.querySelector('#dinnerTable');
const dataRow1 = document.querySelector('[data-row-1]');
const dataRows = [];
  // d3.text("dinners.txt", function(error, text) {
  // if (error) throw error;
  // });

  // d3.csv("index.csv", function(error, data) {
  //   if (error) throw error;
  //   data.forEach(function(blob, i){
  //     document.querySelectorAll('[data-row-'+(i+1)+'] td')[0].textContent = blob.Day;
  //     document.querySelectorAll('[data-row-'+(i+1)+'] td')[1].textContent = blob.Dinner;
  //   })
  // });

  d3.json("index.json", function(error, json) {
    if (error) throw error;
    json.forEach(function(blob, i){
      document.querySelectorAll('[data-row-'+(i+1)+'] td')[0].textContent = blob.day;
      document.querySelectorAll('[data-row-'+(i+1)+'] td')[1].textContent = blob.dinner;
    })

  });
