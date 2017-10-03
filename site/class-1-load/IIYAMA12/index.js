// if (d3) {
//     console.log("D3 lib exist");
// } else {
//     console.log("D3 lib doesn't exist");
// }

// ------------------------- //
function applyTextToNewCreatedElement (element, text) {
     var newTextNote = document.createTextNode(text);
     element.appendChild(newTextNote);
}

function saveDataInTable (mainTable, data, columnNameOrder) { // saveDataInTable(element htmlElement, array data, array columnNames)
    var tableHeadElement = document.createElement("thead");
    var tableHeadRowElement = document.createElement("tr");
    mainTable.appendChild(tableHeadElement);
    tableHeadElement.appendChild(tableHeadRowElement);

    for (var i = 0; i < columnNameOrder.length; i++) {
        var tableColumnHeader = document.createElement("th");
        tableHeadRowElement.appendChild(tableColumnHeader);

        // ---------- //

        // applyTextToNewCreatedElement(tableColumnHeader, columnNameOrder[j]);

        // /\ (custom function)

        // vs! Which one is better? :O

        // \/

        tableColumnHeader.textContent = columnNameOrder[i];
    }

    // create the table body
    var tableBodyElement = document.createElement("tbody");
    mainTable.appendChild(tableBodyElement);
    //

    for (var i = 0; i < data.length; i++) {
        var item = data[i]; // contains data of item.

        // create a new row for every item
        var tableBodyRowElement = document.createElement("tr");
        tableBodyElement.appendChild(tableBodyRowElement);

        // loop through the columnNameOrder array and add the table data.
        for (var j = 0; j < columnNameOrder.length; j++) {
            var columnName = columnNameOrder[j];
            var tableBodyDataElement = document.createElement("td");
            tableBodyRowElement.appendChild(tableBodyDataElement);
            tableBodyDataElement.textContent = item[columnName];
        }
    }
}

var tableElementCSV = document.getElementById('csv-table-content');
if (tableElementCSV) {
    d3.csv("index.csv", function(err, data) {
        if (err) throw err;
        saveDataInTable(tableElementCSV, data, ["day", "dinner"]);
        //console.log(data);
    });
}

// ------------------------- //

var tableElementJSON = document.getElementById('json-table-content');
if (tableElementJSON) {
    d3.json("index.json", function (err, data) {
        if (err) throw err;
        saveDataInTable(tableElementJSON, data, ["day", "dinner"]);
        // console.log(data);
    });
}
