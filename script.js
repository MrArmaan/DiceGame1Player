let score = 0;

function rollDice() {
    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');
    const gameOverElement = document.getElementById('game-over');
    const winScreenElement = document.getElementById('win-screen');

    const roll = Math.floor(Math.random() * 6) + 1;
    diceElement.textContent = roll;

    if (roll === 1) {
        resultElement.textContent = 'You rolled a 1. Game Over!';
        gameOverElement.style.display = 'block';
    } else {
        score += roll;
        resultElement.textContent = `Current Score: ${score}`;

        if (score >= 20) {
            resultElement.textContent = 'Congratulations! You Win!';
            winScreenElement.style.display = 'block';
        }
    }
}

function restartGame() {
    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');
    const gameOverElement = document.getElementById('game-over');
    const winScreenElement = document.getElementById('win-screen');

    score = 0;
    diceElement.textContent = '1';
    resultElement.textContent = '';
    gameOverElement.style.display = 'none';
    winScreenElement.style.display = 'none';
}
