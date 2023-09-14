const grid = document.querySelector('.grid');

let size = 64;
let divWidth = (480/size).toString();

function createGrid(){

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

}

function resetGrid(){

    const gridSquares = Array.from(document.querySelectorAll('.gridSquare'));
    
    gridSquares.forEach(square => {
        square.style.background = 'white';
    });

}

createGrid();