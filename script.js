// make grid and eventListener
function makeGrid(input){
        let container = document.querySelector('.container');
        container.style.gridTemplateColumns =   `repeat( ${input}, auto)`
        container.style.gridTemplateRows =   `repeat( ${input}, auto)`
        for (let i = 0; i < input * input; i++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }

        const gridAll = document.querySelectorAll ('.grid');

        for (i=0; i < gridAll.length; i++){ 
            gridAll[i].addEventListener('mouseover',function(object){
                object.target.style.backgroundColor = "black";
            })
            };
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




// make default grid change to new grid
// reset grid everytime input update