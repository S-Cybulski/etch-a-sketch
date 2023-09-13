const grid = document.querySelector('.grid');

let size = 32;
let divWidth = (32/(Math.round(size/16))).toString();

for (let i = 0; i < size; i++){
    const column = document.createElement('div')
    column.classList.add('column')
    for (let i = 0; i < size; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.cssText =  `width: ${divWidth}px; height: ${divWidth}px;`;
        column.appendChild(gridSquare);
    }
    grid.appendChild(column);
}

const gridSquares = Array.from(document.querySelectorAll('.gridSquare'));

gridSquares.forEach(square => { 
    square.addEventListener('mouseover', () => {
        square.style.background = 'black';
    })
});

