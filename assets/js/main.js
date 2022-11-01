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

    return div;

}