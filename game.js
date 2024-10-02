// Variables to hold game state (example)
let player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 2,
    color: 'blue'
};

let gameRunning = false; // Variable to control the game loop

function startGame() {
    document.querySelector('.game-description').style.display = 'none'; // Hide description
    document.getElementById('game-container').style.display = 'block'; // Show game canvas

    gameRunning = true; // Start the game

    requestAnimationFrame(gameLoop); // Start the game loop
}

function gameLoop() {
    if (gameRunning) {
        updateGame(); // Update game state
        drawGame();   // Render game
        requestAnimationFrame(gameLoop); // Loop to the next frame
    }
}

function updateGame() {
    // Example: Move the player horizontally
    player.x += player.speed;

    // Bounce back if the player hits the edge of the canvas
    if (player.x + player.width > 800 || player.x < 0) {
        player.speed = -player.speed;
    }
}

function drawGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player (a rectangle in this case)
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
