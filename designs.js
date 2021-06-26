// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//Event listener for submit button



function makeGrid() {

	let canvas = document.querySelector('#pixelCanvas');

	const n = 4;
	const m = 4;

	for (var i = 0; i < n; i = i + 1){
		var row = canvas.insertRow();
		for (var j = 0; j < m; j = j + 1){
			var cell = row.insertCell();
		}
	}
}


makeGrid();

console.log(document.querySelector('#pixelCanvas'));
