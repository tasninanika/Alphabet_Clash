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
    
    // stop the game
    if(playerPress === 'Escape'){
        gameOver();
    }

    // expected to press
    const currentAlpha = document.getElementById('alpha');
    const expectedAlpha = currentAlpha.innerText;
    const expectedAlphabet = expectedAlpha.toLowerCase();

    // checked
    if(playerPress === expectedAlphabet){

        // update score
        // 1. get the currennt score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // reuse func
        const currentScore = getScore('current-score');

        // // 2. increase the score by 1
        const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
        setScoreValue('current-score', newScore);
        
        removeBgColor(expectedAlphabet);
        continueGame();
        
    }
    else{
        const currentLife = getScore('current-life');
        const newLife = currentLife - 1;
        setScoreValue('current-life', newLife);

        if(newLife === 0){
            gameOver();
        }

        // get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // reduce the life count
        // const newLife = currentLife - 1;
        // // display
        // currentLifeElement.innerText = newLife;
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
    hideElement('score');
    showElement('play-ground');
    // reset score
    setScoreValue('current-life', 5);
    setScoreValue('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElement('play-ground');
    showElement('score');
    // update final score
    // get the final score
    const finalScore = getScore('current-score');
    setScoreValue('final-score', finalScore);

    // clear the last selected alphabet
    const alphabetSelected = getElementText('alpha');
    removeBgColor(alphabetSelected);
}