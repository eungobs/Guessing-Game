# Node.js Card Guessing Game

## Objective
The objective of this project is to create a card guessing game using Node.js. Users should be able to select two cards at a time. If they match, they remain open; if they don’t match, they flip to hide their contents again. The game is won when all cards are successfully matched to their corresponding cards.

## Interface
- Design a user-friendly interface that is intuitive for the game.
- Include a total of 36 cards arranged in 6 rows and 6 columns, bringing the matching set to 18 pairs.
- When the game starts, the cards should be set dynamically and remain in their selected positions until the game ends or is restarted by the user.

## Features
- When the page is opened, all cards are automatically set and their contents hidden.
- Users can reset the game whenever they choose, changing the position of the cards.
- When the user wins, a popup congratulates them on winning.

## Persistence
- No data is persisted.

## Testing
- Test the application thoroughly to ensure that all features work as expected.

---

## Memory Match Game Instructions

### Objective
The goal of the Memory Match game is to find and match pairs of character cards by flipping them over two at a time. The game is won when all pairs are matched successfully.

### Game Setup

#### Game Board
- The game consists of 36 cards arranged in a grid of 6 rows and 6 columns.
- Each card displays a character image hidden from view at the beginning of the game.

#### Starting the Game
- When the game loads, all cards are face down.
- Players can click on any two cards to flip them over.

### How to Play

#### Flipping Cards
1. **Select Two Cards:** Click on the first card to flip it over. The character image will be revealed.
2. **Second Selection:** Click on a second card. The image on this card will also be revealed.

#### Matching Logic
- **If the Cards Match:**
  - If the two flipped cards show the same character, they will remain open, and the player scores a match.
  - The matched cards will stay face up until the end of the game.
  
- **If the Cards Do Not Match:**
  - If the two cards do not match, they will flip back over after a short delay, hiding their contents again.

### Game Continuation
- Players continue to flip cards in pairs until all pairs are matched.
- Keep track of the number of attempts made to improve memory for future games.

### Winning the Game
- The game is won when all pairs of character cards are matched.
- A congratulatory popup message will be displayed, celebrating the player’s success.

### Resetting the Game
- Players can choose to reset the game at any time, which shuffles the cards and starts the game anew.

### Additional Features
- **Timer:** A timer is included to track how long it takes for players to match all pairs.
- **Scoring System:** A scoring system is introduced based on the number of attempts taken to match all pairs.
- **Visual Feedback:** Visual effects (like card flip animations) and sound effects to enhance the gaming experience.

### Conclusion
The Memory Match game is designed for children and is not only entertaining but also a fun way to improve memory and cognitive skills. Enjoy playing and challenging yourself to match all the character pairs!

---

## Installation

### Prerequisites
- Node.js should be installed on your system. If you don't have Node.js, you can download and install it from [here](https://nodejs.org/).

### Steps to Run the Game

1. **Clone the repository**:
   First, navigate to the directory where you want to store the project and clone the repository.
  
   git clone https://github.com/your-username/MemoryMatch.git

Navigate to the project directory:


cd MemoryMatch
Install dependencies: Install the required dependencies listed in the package.json file.

npm install
Start the server: Once all dependencies are installed, start the game server using the following command:

node server.js
View the game: Open your browser and go to http://localhost:3000 to view the game.

Resetting the Game
You can reset the game by clicking on the "Reset Game" button, which will shuffle the cards and start a new game.
