// tariqras  udacity-intro-to-programming nanodegree  pixel art maker  2021JUNE26
// https://github.com/tariqras/udacity-intro-to-prog-pixel-art

// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

// Select canvas
const canvas = document.getElementById('pixelCanvas');

// Default color is black
let myColor = '#000000';

// Event listener for color picker
colorPicker.addEventListener('input', function changeColor(e) {
    "use strict";
    myColor = colorPicker.value;
} );

// Event listener for canvas generation submit button
sizePicker.addEventListener('submit', function makeGrid(e) {

    // Get the user input values
    const canvasHeight = Number(document.getElementById('inputHeight').value);
    const canvasWidth = Number(document.getElementById('inputWidth').value);

    // Clear the previous canvas
    while(canvas.rows.length >0){
        canvas.deleteRow(0);
    }

    // Generate the drawing canvas
    for (let i = 0; i < canvasHeight; i++){
        var row = canvas.insertRow(i);
        for (let j = 0; j < canvasWidth; j++){
            const cell = row.insertCell(j);
            // Add event listener for each cell to change the background color
            cell.addEventListener("click", function(e){
                cell.style.backgroundColor = myColor;
                e.preventDefault();
            });
        }
    }

    e.preventDefault(); //Prevents canvas from being cleared automatically
});


// Limit canvas size within limits for usability
sizePicker.addEventListener('input', function (e){
    const canvasHeight = document.getElementById('inputHeight');
    const canvasWidth = document.getElementById('inputWidth');
    if (Number(canvasHeight.value) > 12) {
        canvasHeight.value = '12';
    }

    if (Number(canvasWidth.value) > 18) {
        canvasWidth.value = '18';
    }

    e.preventDefault();
});


