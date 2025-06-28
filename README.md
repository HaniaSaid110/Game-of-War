# Game of War

A simple web-based implementation of the classic "Game of War" card game.

**This project is part of Scrimba's API Basics 3: Build a Game (Async JS, Callbacks & Promises) course.**

## How to Play

1. Click **New Deck** to start a new game and shuffle the cards.
2. Click **Draw** to draw two cards: one for you and one for the computer.
3. The player with the higher card wins the round and scores a point.
4. If both cards are of equal value, it's a tie (War) and no points are awarded.
5. Continue drawing until all cards have been played.
6. When the deck runs out, the player with the most points wins the game.

**Card Rankings:** 2 (lowest) up to Ace (highest).

## Project Structure

- `index.html` - Main game interface
- `about-game.html` - Instructions and rules
- `js/game-of-war.js` - Game logic and API calls
- `css/` - Stylesheets for the game
- `images/` - Background and card images
- `webfonts/` - Font files for icons

## Technologies Used

- HTML, CSS, JavaScript
- [Bootstrap](https://getbootstrap.com/) for styling
- [Deck of Cards API](https://deckofcardsapi.com/) (via Scrimba proxy)

## How to Run

Open `index.html` in your web browser.
