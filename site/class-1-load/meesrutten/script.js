const mainElement = document.querySelector('main')
const dataRow1 = document.querySelector('[data-row-1]');
const dataRows = [];
let element;
let newElem;

const table = document.createElement('table');
table.setAttribute('id', 'dinnerTable');
mainElement.appendChild(table);
const dinnerTable = document.querySelector('#dinnerTable');

d3.json("index.json", function(error, json) {
  if (error) throw error;
  //Added 1 for headings
  for (let i = 0; i < json.length + 1; i++) {
    const tableRow = document.createElement('tr');
    dinnerTable.appendChild(tableRow)
  }
  //For length of object in array which is 2
  for (let i = 0; i < Object.keys(json[0]).length; i++) {
    newElem = createElem('th', getDataFromJson(0,i))
    dinnerTable.querySelectorAll('tr')[0].appendChild(newElem)
  }
  //For length of JSON which is 3
  for (let i = 0; i < json.length; i++) {
    newElem = createElem('td', json[i]["day"])
    dinnerTable.querySelectorAll('tr')[i + 1].appendChild(newElem)
    newElem = createElem('td', json[i]["dinner"])
    dinnerTable.querySelectorAll('tr')[i + 1].appendChild(newElem)
  }
  function getDataFromJson(row, key) {
    // console.log(Object.keys(json[row])[key]);
    return Object.keys(json[row])[key]
  }
});

function createElem(element, content) {
  element = document.createElement(element);
  element.appendChild(document.createTextNode(content));
  return element;
}

d3.csv("index.csv", function(error, data) {
  if (error) throw error;
  //Kan te gek ook ;)
  document.querySelector('section').innerHTML =
  `
  <table id="secondDinnerTable">
    <tr>
      <th></th>
      <th></th>
    </tr>
    <tr data-row-1>
      <td></td>
      <td></td>
    </tr>
    <tr data-row-2>
      <td></td>
      <td></td>
    </tr>
    <tr data-row-3>
      <td></td>
      <td></td>
    </tr>
  </table>
  `;
  data.forEach(function(blob, i){
    document.querySelectorAll('[data-row-'+(i+1)+'] td')[0].textContent = blob.Day;
    document.querySelectorAll('[data-row-'+(i+1)+'] td')[1].textContent = blob.Dinner;
  })
  for (var i = 0; i < Object.keys(data[0]).length; i++) {
    document.querySelectorAll('#secondDinnerTable th')[i].textContent = Object.keys(data[0])[i]
  }
});
