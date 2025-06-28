let newDeck = document.getElementById("new-deck");
let remainingCards = document.querySelector(".remaining-cards");
let drawCards = document.getElementById("draw-cards");
let deckId;
let computerCard = document.getElementById("computer-card");
let yourCard = document.getElementById("your-card");
let computerScoreText = document.getElementById("computer-score-text");
let yourScoreText = document.getElementById("your-score-text");
let computerScore = 0;
let yourScore = 0;
let heading = document.querySelector("h1");

function handleClick(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/`)
    .then(res => res.json())
    .then(data => {
        remainingCards.textContent = `Remaining cards: ${data.remaining}`;
        deckId = data.deck_id;
        computerScore = 0;
        yourScore = 0;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        yourScoreText.textContent = `Your score: ${yourScore}`;
        computerCard.src = "";
        yourCard.src = "";
        heading.textContent = `Game of War`;
        drawCards.disabled = false;
    })
}

newDeck.addEventListener("click", handleClick);

drawCards.addEventListener(`click`, function(){
    if(deckId === undefined){
        heading.textContent = `Please start a new game first!`;
        return;
    }
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        computerCard.innerHTML = `
            <img src="${data.cards[0].image}" alt="" class="w-100 h-100">
        `;
        yourCard.innerHTML = `
            <img src="${data.cards[1].image}" alt="" class="w-100 h-100">
        `;
        remainingCards.textContent = `Remaining cards: ${data.remaining}`;
        let winner = determineCardWinner(data.cards[0], data.cards[1]);
        heading.textContent = winner;
        if(data.remaining === 0){
            if(computerScore > yourScore){
                heading.textContent = `The computer won the game!`;
            } else if (yourScore > computerScore){
                heading.textContent = `You won the game!`;
            } else {
                heading.textContent = `It's a tie game!`;
            }
            drawCards.disabled = true;
        }
    })
    .catch(err => {
        console.log(`Error fetching cards: ${err}`);
    });
})

function determineCardWinner(card1, card2){
    let cardValues = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `JACK`, `QUEEN`, `KING`, `ACE`];
    let card1Value = cardValues.indexOf(card1.value);
    let card2Value = cardValues.indexOf(card2.value);
    if(card1Value > card2Value){
        computerScore++;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        // heading.textContent = `Computer wins`;
        return `Computer wins`;
    } else if (card1Value < card2Value){
        yourScore++;
        yourScoreText.textContent = `Your score: ${yourScore}`;
        // heading.textContent = `You win`;
        return `You win`;
    } else {
        // heading.textContent = `War`;
        return `War`;
    }
}


