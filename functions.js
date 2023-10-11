let customSize = document.querySelector('.scale');
let container = document.querySelector('.container');
let grid = document.querySelector('.grid');
let defaultSize = 16;    

createSquareGrid(defaultSize);

function createSquare(size){
    let sqr = document.createElement('div');
    sqr.classList.add('cell');
    sqr.style.width =`${size}px`;
    sqr.style.height =`${size}px`;
    return sqr;
}
function createSquareGrid (scale){
    const sqrSize = 960/scale;
    for (let j = 0; j< scale; j++){
        const row = document.createElement('div');
        for (let i = 0; i < scale; i++){
            row.appendChild(createSquare(sqrSize));
        }
        grid.appendChild(row);
    }
}

