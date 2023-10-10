
function createSquareGrid (n){
    let container = document.querySelector('.container');

    let grid = document.createElement('div');
    grid.className='grid';

    for (let i = 0; i < n; i++){
        let column = document.createElement('div');
        column.className='column';
        for (let j=0; j < n;j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
        }
        grid.appendChild(column);
    }
    container.appendChild(grid);
}
document.addEventListener('DOMContentLoaded', function() {
    createSquareGrid(16);
});
