let customSize = document.querySelector('.scale');
let container = document.querySelector('.container');
let grid = document.querySelector('.grid');
let newgrid = document.querySelector('.newgrid');
let cells = document.querySelectorAll('.cell');
let defaultSize = 16;    

createSquareGrid(defaultSize);

function createSquare(size){
    let sqr = document.createElement('div');
    sqr.classList.add('cell');
    sqr.style.width =`${size}px`;
    sqr.style.height =`${size}px`;
    //TODO: create event listener for mouseenter event to change cell colors
// Loop through each cell and add the event listener

    sqr.addEventListener('mouseenter', (mouseEvent) => {
        randomColor(mouseEvent.target);
        mouseEvent.target.classList.add("active");
    });
    return sqr;
}
function createSquareGrid (scale){
    const sqrSize = 420/scale;
    for (let j = 0; j< scale; j++){
        const row = document.createElement('div');
        for (let i = 0; i < scale; i++){
            row.appendChild(createSquare(sqrSize));
        }
        grid.appendChild(row);
    }
}

//TODO: custom grid function that removes the default 16x16 one and takes input as new dimensions
function makeCustomGrid(){
    //user input size
    let newScale = parseInt(customSize.value);
    //mak sure there is a size and that it fits our parameters
    if (newScale != null && newScale <=100 && newScale>=2){
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        createSquareGrid(newScale);        
    }
    else if (newScale>100){
        alert("Sorry! 100 x 100 is as big as we can go!");
    } else if (newScale<2){
        alert("Sorry! 2x2 is as small as we can go!");
    } else if (newScale == null){
        alert("Please input your desired square dimension");
    }
}
//TODO: create event listener for new grid button
newgrid.addEventListener('click', makeCustomGrid);





//TODO: create function that randomly assigns an aesthetically pleasing color
function randomColor(square){
    let colors = ['#F94144','#F3722C','#F8961E','#F9844A','#F9C74F','#90BE6D','#43AA8B','#4D908E','#577590','#277DA1'];
    let colorIndex = Math.floor(Math.random() * colors.length);
    let hexCode = colors[colorIndex];
    square.style.backgroundColor = `${hexCode}`;
    }


//TODO: create function to clear colors