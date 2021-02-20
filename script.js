let gridContainer = document.querySelector('.gridcontainer');
const slider = document.getElementById('slider');
const valor = document.querySelector('.gridvalue');

start(slider.value);
function start(){
for( j = 1; j <= (slider.value) * (slider.value); j++){
    var square = document.createElement('div');
    square.classList.add('squares');
    gridContainer.appendChild(square);
    square.addEventListener('mouseover', hoverColor);}
    gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
    valor.textContent = `${slider.value} x ${slider.value}`;
    
}

function hoverColor(){

    this.style.backgroundColor = `rgba( ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomAlpha()})`;
}

const squares = document.querySelectorAll('.squares');




function randomColor(){

    let color = Math.floor(Math.random() * 255);
    return color;
}
function randomAlpha(){

    let alpha = Math.random();

    if( alpha < 0.3){

        alpha = alpha + 0.3;
    }
    return alpha;
}

function emptyGrid(){

    const squares = document.querySelectorAll('.squares');

    for(i = 0; i <= squares.length -1; i++){

        if(squares[i] <0 ){

            return;
        }
        else{
            squares[i].remove();
        };
    }
    gridContainer.style.gridTemplateColumns = `repeat(0, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(0, 1fr)`
    start();

}

slider.addEventListener('mouseup', emptyGrid);
window.onload = function(){
    const audio = document.getElementById('audio');
    audio.play;
}