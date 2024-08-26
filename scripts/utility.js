
function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getRandomAlpha(){
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index 
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index];
    return alphabet;
}