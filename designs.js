// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

const canvas = document.getElementById('pixelCanvas');







//Event listener for submit button
sizePicker.addEventListener('submit', function makeGrid(e) {

	//Get the user input values
	const canvasHeight = Number(document.getElementById('inputHeight').value);
	const canvasWidth = Number(document.getElementById('inputWidth').value);

	//Clear the previous canvas
	while(canvas.rows.length >0){
		canvas.deleteRow(0);
	}

	//Make the drawing canvas
	for (var i = 0; i < canvasHeight; i = i + 1){
		var row = canvas.insertRow();
		for (var j = 0; j < canvasWidth; j = j + 1){
			var cell = row.insertCell();
		}
	}

	e.preventDefault();

});


//Check for user values within limits
sizePicker.addEventListener('input', function (e){
	const canvasHeight = document.getElementById('inputHeight');
	const canvasWidth = document.getElementById('inputWidth');
	if (Number(canvasHeight.value) > 30){
		canvasHeight.value = '30';
	}

	if (Number(canvasWidth.value) > 50){
		canvasWidth.value = '50';
		canvasWidth.style.backgroundColor = " lightgreen";
	}

});


console.log(canvas);
