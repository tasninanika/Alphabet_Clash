// add hidden class to hide any section
// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
// }

// // show the playground
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden');


function handleKeyboard(event){
    const playerPress = event.key;

    // expected to press
    const alpha = document.getElementById('alpha');
    const expectedAlpha = alpha.innerText;
    const expectedAlphabet = expectedAlpha.toLowerCase();

    // checked
    if(playerPress === expectedAlphabet){

    }
    else{
        
    }
}
document.addEventListener('keyup', handleKeyboard);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlpha();

    // set randomly alphabet
    const getAlpha = document.getElementById('alpha');
    getAlpha.innerText = alphabet;

    // set bg color
    addBgColor(alphabet);
}


// reuse
function play(){
    hideElement('home');
    showElement('play-ground');
    continueGame();
}