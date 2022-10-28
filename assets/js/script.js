function yyy(){

    document.getElementById('game-container').innerHTML = '';
    //pick the value of the choise
    let choise = document.getElementById("inputGroupSelect04").value;
    console.log(choise);

    switch(choise){
        case "easy":
            xxx(100, "quadrato10");
            break;
        case "medium":
            xxx(81, "quadrato9");
            break;
        case "hard":
            xxx(49, "quadrato7");
            break;
    }
}





//let playBtn = document.getElementById('play-btn');


//creation of different kind of grids
function xxx(difficulty, squares){

    //pick the element where the grid will take place
    let grid = document.getElementById('game-container');
    console.log( grid );

    //let difficulty = choise.value;

    //createSquare(squares);

    for( let i = 1; i <= difficulty; i++ ){

        let elementoCorrente = createSquare(squares);
        elementoCorrente.innerHTML = i;
        console.log(elementoCorrente);
      
        elementoCorrente.addEventListener('click', function(){
            console.log(this);
            this.classList.toggle('active');
        })
      
        grid.append( elementoCorrente );
      
    }

    
}

//creation of squary div into the grid
function createSquare(squares){
    const div = document.createElement('div');
    div.classList.add(squares);
    return div;
}