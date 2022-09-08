const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;


let ChoiceErase = document.getElementById("eraser");
let drawCanvas = document.getElementById("main-content");


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeStyle(change){
    currentColor = change;  
};



//set default draw area 16 x 16
//populate draw area with divs
function drawTheArea(drawMesures) {

    var grid = document.createElement('div'); // create a grid
    grid.className = 'draw-area';

    for (var i = 0; i < drawMesures; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';

        for (var j = 0; j < drawMesures; ++j) {
            var rowElement = document.createElement('div'); // create row
            rowElement.className = 'row';
            rowElement.id = i+""+j;
  
            rowElement.addEventListener('mouseover', drawBox);
            rowElement.addEventListener('mousedown', drawBox);

            column.appendChild(rowElement); // append row in column
        }

        grid.appendChild(column); // append column inside grid
    }
    drawCanvas.appendChild(grid);
};


function drawBox(e){
    if (e.type === 'mouseover' && mouseDown){
        e.target.style.backgroundColor = currentColor
    };
};



function resetCanvas() {
    console.log("script was triggered");
    currentSize = document.getElementById("resize-form").elements[0].value;

    const refresher = document.getElementsByClassName('draw-area')[0].remove();
    console.log(refresher);

    console.log(currentSize);
    drawTheArea(currentSize);

    //document.getElementById("draw-area").innerHTML="";
    //drawTheArea(currentSize);
};

//document.addEventListener('DOMContentLoaded', resetCanvas);

window.onload = () => {drawTheArea(currentSize)};




//ask user for the draw box size: pop-up and input


//choose what happens when hovered: color choice

