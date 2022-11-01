// function linked to button's click
function play(){

    //setting the generation of a uniqe grid, not one each click event
    document.getElementById("game-container").innerHTML = '';

    //initializzation of choise's value how a Variable
    let choise = document.getElementById("inputGroupSelect04").ariaValueMax;

    //recalling different parametres depending of the choise
    switch( choise ){

        case "easy":
            gridGeneration( 100, "quadrato10");
            break;
            
        case "medium":
            gridGeneration( 81, "quadrato9");
            break;

        case "hard":
            gridGeneration (49, "quadrato7");
            break;

    }
}

// function of squares' creation
function squareCreation(squares){

    let div = document.createElement("div");
    
    div.classList.add(squares);
    console.log("this is the created Div", div);

    return div;

}

//grid generation's function
function gridGeneration( difficulty, squares){

    let grid = document.getElementById("game-container");
    console.log("this is the grid", grid);

    for( i=1; i<difficulty; i++ ){
        
        //initializzation variable of created squares threw the dedicated function
        let createdSquare = squareCreation(squares);
        createdSquare.innerHTML = i;
        console.log( "created square", createdSquare);

        createdSquare.addEventListener( "click", function(){

            this.classList.toggle("acid-button");
            console.log( "this keyword", this );
        })

        grid.append( createdSquare );

    }
}