// Array of character card images
const cardImages = [
    'https://i.pinimg.com/564x/de/01/d7/de01d78472cf13183bcf2baa3773c0a6.jpg',
    'https://i.pinimg.com/564x/75/5f/a3/755fa3e846751a2a00045e9f4c58fa79.jpg',
    'https://i.pinimg.com/564x/d2/f9/29/d2f929d95a9565a1622969c24a63a2a3.jpg',
    'https://i.pinimg.com/564x/25/e2/f3/25e2f3ca926647c8b1da5fd9e48dc72e.jpg',
    'https://i.pinimg.com/564x/f8/56/5f/f8565fd6f1ee7a8bc20d1f2cb55ef32d.jpg',
    'https://i.pinimg.com/564x/e5/df/2c/e5df2c2fd2394b87d0762adcab9eab8a.jpg',
    'https://i.pinimg.com/564x/7b/9e/76/7b9e762fc9cea563abe21ada88137636.jpg',
    'https://i.pinimg.com/736x/e9/f1/f0/e9f1f0c2cc5ec7aab0b3d8de827d74c0.jpg',
    'https://i.pinimg.com/564x/2b/72/69/2b7269aa436bb5098f9b6c7063a95316.jpg',
    'https://i.pinimg.com/564x/d3/0c/68/d30c68443d5fbfc658509a8470507f77.jpg',
    'https://i.pinimg.com/736x/6d/f7/f8/6df7f815611add2abc350e33793cf2bc.jpg',
    'https://i.pinimg.com/736x/f9/6e/b9/f96eb9a81431b1f88689641e8ce84816.jpg',
    'https://i.pinimg.com/564x/a6/e2/09/a6e209e615fefec3fb9c0b3ba231bbf3.jpg',
    'https://i.pinimg.com/564x/6c/fd/76/6cfd76202efa13907556cc2eaa94e54d.jpg',
    'https://i.pinimg.com/564x/98/a9/44/98a944f8e9ac4b54060b7c353afcb6f1.jpg',
    'https://i.pinimg.com/564x/80/3f/85/803f8576411c9fc227c7768c3e1c4181.jpg',
    'https://i.pinimg.com/736x/2b/f3/df/2bf3dffd69132ad0cb0f2ca81b008712.jpg',
    'https://i.pinimg.com/564x/47/bf/e7/47bfe7f270b186e00a04ef12d920c9dd.jpg',
];

// To double the array for pairs
const cards = [...cardImages, ...cardImages];

// Shuffle cards function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the cards when the game starts
let shuffledCards;

// Function to start the game
document.getElementById('start-button').addEventListener('click', () => {
    shuffledCards = shuffle(cards);
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('card-grid').style.display = 'grid';
    document.getElementById('reset-button').style.display = 'block';
    createCards();
});

function createCards() {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';  // Clear any existing cards
    shuffledCards.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Create image element
        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);

        // Add event listener for flipping cards
        card.addEventListener('click', () => flipCard(card, img));

        cardGrid.appendChild(card);
    });
}

let flippedCards = [];
let matchedCards = 0;

// Function to flip a card
function flipCard(card, img) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

// Function to check for a match
function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    const firstImage = firstCard.querySelector('img').src;
    const secondImage = secondCard.querySelector('img').src;

    if (firstImage === secondImage) {
        matchedCards += 2;
        flippedCards = [];  // Reset flipped cards

        // Check for win condition
        if (matchedCards === cards.length) {
            setTimeout(showCongratulationsMessage, 500);
        }
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        flippedCards = [];  // Reset flipped cards
    }
}

// Function to show congratulations message
function showCongratulationsMessage() {
    const message = document.getElementById('congratulations');
    message.style.display = 'block'; // Show the message
}

// Reset game functionality
document.getElementById('reset-button').addEventListener('click', () => {
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('card-grid').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
    flippedCards = [];
    matchedCards = 0;

    // Hide the congratulations message
    const existingMessage = document.getElementById('congratulations');
    existingMessage.style.display = 'none';
    
    // Optionally clear the card grid
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = ''; 
});

// Close button functionality
document.getElementById('close-button').addEventListener('click', () => {
    const message = document.getElementById('congratulations');
    message.style.display = 'none'; // Hide the message
});
