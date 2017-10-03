// Stuff for demo:
document.body
  .appendChild(document.createElement('h1'))
  .textContent = 'Check your console!';

// Stuff to actually clean data:
d3.text('index.txt') // Find `index.txt`.
  .mimeType('text/plain;charset=iso88591') // Set the character encoding.
  .get(onload) // Actually reques the file, call `onload` when done.

function onload(err, doc) {
  if (err) { // When the request didn’t work...
    throw err // ...throw the error.
  }

  var header = doc.indexOf('STN,YYYYMMDD') // Find the header.
  var end = doc.indexOf('\n', header) // Find the next newline...
  doc = doc.slice(end).trim() // Strip stuff before `end`, and trim white-space.
  doc = doc.replace(/ +/g, ',') // Replace all (one or more) spaces with a comma.
  var parseTime = d3.timeParse('%Y%m%d') // Create a time parser.
  var data = d3.csvParseRows(doc, map) // Parse the CSV rows (as we don’t have a heading row).
  console.log(data) //=> Print stuff to the console.
  function map(d) { // Clean each row (`d`).
    return {
      date: parseTime(d[1]), // Parse `d[1]` into a date, as defined by `parseTime`.
      temp: Number(d[2]) // Parse `d[2]` as a number.
    }
  }
}
