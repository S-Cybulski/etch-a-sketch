const grid = document.querySelector('.grid');

let size = 32;
let divWidth = (480/size).toString();
let rainbow = false;

function createGrid(){

    for (let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
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
            if (rainbow){
                let red = ((Math.random() * 255) + 1).toString()
                let green = ((Math.random() * 255) + 1).toString()
                let blue = ((Math.random() * 255) + 1).toString()
                square.style.background = `rgb(${red},${green},${blue})`;
            }
            else{
                square.style.background = 'black';
            }
        })
    });

}

function resetGrid(){

    const gridSquares = Array.from(document.querySelectorAll('.gridSquare'));
    
    gridSquares.forEach(square => {
        square.style.background = 'white';
    });
    
}

function recreateGrid(){
    const gridSquares = Array.from(document.querySelectorAll('.gridSquare'))

    gridSquares.forEach(square => {
        square.remove();
    })
    
    size = (window.prompt("Enter Grid Size:"))%100;
    divWidth = (480/size).toString();

    createGrid();
}

function rainbowMode(){
    rainbow = !(rainbow);
}

createGrid();