// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
//Event listener for submit button
sizePicker.addEventListener('submit', function makeGrid(e) {

	const canvasHeight = Number(document.getElementById('inputHeight').value);
	const canvasWidth = Number(document.getElementById('inputWidth').value);

	for (var i = 0; i < canvasHeight; i = i + 1){
		var row = canvas.insertRow();
		for (var j = 0; j < canvasWidth; j = j + 1){
			var cell = row.insertCell();
		}
	}

	e.preventDefault();

});



console.log(canvas);
