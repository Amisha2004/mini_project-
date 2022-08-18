//BLACKJACK CASINO GAME
let player = {
    name: "per",
    chips: 200
}
let cards=[];
let sum=0;
let hasBlackjack= false;
let isAlive=false;
let message="";
let messageEl = document.getElementById("msg-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $ " + player.chips
// console.log(cards);
function getRandomCard(){
    let RandomNumber = Math.floor(Math.random()*13)+1
    if(RandomNumber>10){
        return 10
    }
    else if(RandomNumber==1){
        return 11
    }
    else{
        return RandomNumber
    }
}
function start(){
    isAlive=true;
    let firstCard = getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard , secondCard]
    sum=firstCard+secondCard;
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards:" 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if(sum<=20){
        message = "Do you want to draw a new card!"
    }
    else if(sum==21){
        message = "You've got BlackJack!"
        hasBlackjack = true;
    }
    else {
        message="You're out of game!"
        isAlive = false
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive==true && hasBlackjack==false){
        let card= getRandomCard();
        sum+=card;
        cards.push(card)
        renderGame()
    }
}