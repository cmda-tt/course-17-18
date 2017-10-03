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
<<<<<<< HEAD
	console.log(data);
=======
	// console.log(data);
>>>>>>> 3db62f487cf237076162c2154c8abd502268eda8
	makeRow(data, 'jsonList');
});

d3.csv('./index.csv', (err, data) => {
<<<<<<< HEAD
	console.log(data);
	makeRow(data, 'csvList');
})
=======
	// console.log(data);
	makeRow(data, 'csvList');
})
>>>>>>> 3db62f487cf237076162c2154c8abd502268eda8
