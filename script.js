const grid = document.querySelector('.grid');
const rainbowButton = document.querySelector('.rainbow');
const shadingButton = document.querySelector('.shading');

let size = 32;
let divWidth = (960/size).toString();
let rainbow = false;
let shading = false;

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
        let shade = 256
        square.addEventListener('mouseover', () => {

            if (rainbow){
                let red = ((Math.random() * 255) + 1).toString()
                let green = ((Math.random() * 255) + 1).toString()
                let blue = ((Math.random() * 255) + 1).toString()
                square.style.background = `rgb(${red},${green},${blue})`;
            }
            else if(shading){
                shade -= 25;
                square.style.background = `rgb(${shade},${shade},${shade})`;
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
    divWidth = (960/size).toString();

    createGrid();
}

function rainbowMode(){
    rainbow = !(rainbow);
    if (rainbow){
        rainbowButton.style.background = 'lightgreen';
        shadingButton.style.background = 'lightgray';
    }
    else{
        rainbowButton.style.background = 'lightgray';
    }
    shading = false;
}

function shadeMode(){
    shading = !(shading);
    if (shading){
        shadingButton.style.background = 'lightgreen';
        rainbowButton.style.background = 'lightgray';
    }
    else{
        shadingButton.style.background = 'lightgray';
    }
    rainbow = false;
}
createGrid();