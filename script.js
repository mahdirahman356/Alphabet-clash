function startPlaying(){
    let hideHome = document.getElementById('home');
    hideHome.classList.add('hidden')
    let setGame = document.getElementById('game');
    setGame.classList.remove('hidden')
    alphabatWord()
    
}
// alphabet Word
function alphabatWord(){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let alphabet = alpha.split('')
    
    let alphaRandomNumbers = Math.random()*25
    let alphaNumbers = Math.round(alphaRandomNumbers)
    let alphabetIs = alphabet[alphaNumbers]
    let setAlphabet = document.getElementById('alp');
    setAlphabet.innerText = alphabetIs
    setColorOfAlfhabat(alphabetIs)
}

function setColorOfAlfhabat(element){
    let bgColor = document.getElementById(element);
    let bgColorIs = bgColor.classList.add('bg-gray-600','text-[#FFFFFF]')   

}
function removeColorOfAlfhabat(element){
    let bgColor = document.getElementById(element);
    let bgColorIs = bgColor.classList.remove('bg-gray-600','text-[#FFFFFF]')   

}
function playagain(){
    let hiddenSec = document.getElementById('game')
    hiddenSec.classList.remove('hidden')
    let showSec = document.getElementById('section-score')
    showSec.classList.add('hidden') 
    let lifeIs = document.getElementById('life');
    lifeIs.innerText = 5
    let scoreIs = document.getElementById('score');
    scoreIs.innerText = 0

}

function setKeyboard(event){
    let alpha = event.key
    if(alpha === 'Escape'){
        let hiddenSec = document.getElementById('game')
            hiddenSec.classList.add('hidden')
            let showSec = document.getElementById('section-score')
            showSec.classList.remove('hidden')
            let yourScore = document.getElementById('score');
            let yourScoreNum = yourScore.innerText
            let lastScore = document.getElementById('make-score');
            lastScore.innerText = yourScoreNum
    }
    let alp = document.getElementById('alp')
    let alpText = alp.innerText.toLowerCase()
    if(alpha === alpText){
        removeColorOfAlfhabat(alpText)
        startPlaying()
        let scoreIs = document.getElementById('score');
        let scoreText = scoreIs.innerText;
        let scoreNum = parseInt(scoreText)
        let scoreNumUp = scoreNum + 1
        scoreIs.innerText = scoreNumUp
    }else{
        let lifeIs = document.getElementById('life')
        let lifeTaxt = lifeIs.innerText;
        let lifenum = parseInt(lifeTaxt)
        let lifenumUp = lifenum - 1
        let lifenumUpIs = lifeIs.innerText = lifenumUp
        if( lifenumUpIs === 0 ){
            let hiddenSec = document.getElementById('game')
            hiddenSec.classList.add('hidden')
            let showSec = document.getElementById('section-score')
            showSec.classList.remove('hidden')
            let yourScore = document.getElementById('score');
            let yourScoreNum = yourScore.innerText
            let lastScore = document.getElementById('make-score');
            lastScore.innerText = yourScoreNum

        }
    }
}


document.addEventListener('keyup',setKeyboard)