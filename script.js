const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++){
    const column = document.createElement('div')
    column.classList.add('column')
    for (let i = 0; i < 16; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        column.appendChild(gridSquare);
    }
    grid.appendChild(column);
}

const gridSquares = Array.from(document.querySelectorAll('.gridSquare'));

gridSquares.forEach(square => { 
    square.addEventListener('mouseover', () => {
        square.style = 'background-color: black;'
    })
});

