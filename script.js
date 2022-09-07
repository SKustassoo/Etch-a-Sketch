

//set default draw area 16 x 16
//populate draw area with divs
function drawTheArea(drawMesures = 16) {

    var grid = document.createElement('div'); // create a grid
    grid.className = 'draw-area';

    for (var i = 0; i < drawMesures; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';

        for (var j = 0; j < drawMesures; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }

        grid.appendChild(column); // append column inside grid
    }
    document.getElementById("main-content").appendChild(grid);
}






drawTheArea();
//styleCell();

//ask user for the draw box size: pop-up and input


//choose what happens when hovered: color choice

