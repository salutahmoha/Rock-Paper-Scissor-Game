const rock_paper_scissor = document.querySelector('.rock_paper_scissor');
const player = document.getElementsByClassName("player")
var playerChoiceDisplay = document.getElementsByClassName("player-choice-display")


rock_paper_scissor.addEventListener('click', function(){
    if(isClickable =true){
        var rock_paper_scissor = document.getElementsByClassName('.rock_paper_scissor');
    var newElement = document.createElement('player-choice-display');
    newElement.textContent = "hello";
    rock_paper_scissor.appendChild(newElement)
    }
})