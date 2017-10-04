function makeRow(data, listId) {
	// using the details tag will result in this bloated code because textContent does not work with these tags
	data.forEach(e => {
		let nameDinner = document.createElement('details'),
			dateNode = document.createElement('summary'),
			dateText = document.createTextNode(e.date),
			contentNode = document.createElement('p'), contentText = document.createTextNode(e.dinner);

		dateNode.appendChild(dateText);
		contentNode.appendChild(contentText);

		nameDinner.appendChild(dateNode);
		nameDinner.appendChild(contentNode);

		document.getElementById(listId).appendChild(nameDinner);
	})
}

d3.json('./index.json', (err, data) => {
	// console.log(data);
	makeRow(data, 'jsonList');
});

d3.csv('./index.csv', (err, data) => {
	// console.log(data);
	makeRow(data, 'csvList');
})
