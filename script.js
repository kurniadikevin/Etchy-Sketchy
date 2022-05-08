// make grid and eventListener
function makeGrid(input){
    if( input <= 100){
        let container = document.querySelector('.container');
        container.style.gridTemplateColumns =   `repeat( ${input}, auto)`
        container.style.gridTemplateRows =   `repeat( ${input}, auto)`
        for (let i = 0; i < input * input; i++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        } 
    } else {
        alert('Maximum number is 100')
    }
};

document.querySelector('.gridSize').innerHTML = "16 X 16"
makeGrid(16);

//button function
const inputGrid = function(){
    input = prompt ("Enter Grid Size","16");
    if (prompt != null  ){
        const gridAll = document.querySelectorAll ('.grid');
        for (i=0; i < gridAll.length; i++){ 
            gridAll[i].remove();
        }
        document.querySelector('.gridSize').innerHTML =
        input + "x" + input;
        makeGrid(input);
    }
}

let input = document.querySelector('#colorPicker');
input.addEventListener('input',updateValue);
function updateValue(e) {
  
    const gridAll = document.querySelectorAll('.grid');
    gridAll.forEach((td) => {
        td.style.setProperty('--grid-background-color', e.target.value);//hover color

})
    for (i=0; i < gridAll.length; i++){ 
        gridAll[i].addEventListener('click',function(object){
            object.target.style.backgroundColor = e.target.value; // event listener grid color
        })
        };
    };

/*
- color pick default should be black
- how to not reset colorpick everytime changing grid size*/
