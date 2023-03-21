const statusDisplay = document.querySelector(".game--status");
const optionForm = document.querySelector(".option--form");
const submitButton = document.getElementById("formSubmit");
const cells = document.getElementsByClassName("cell");

let currentPlayer = "X";
// H - Human, C - Computer
let opponent = "H";
let gameOver = false;

// game start
optionForm.addEventListener("submit", (e) => {
    const optionData = new FormData(optionForm);
    for (const entry of optionData) {
        // incoming data is a list of strings => ['option', value]
        opponent = entry[1];
    }
    submitButton.disabled = true;
    startGame();
    e.preventDefault();
});

const makeComputerMove = () => {
    const emptyCells = Array.from(cells).filter(cell => cell.innerHTML === '');
    let move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	move.innerHTML = 'O';
}

// main game "loop"
const startGame = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            if (!gameOver && cells[i].innerHTML === "") {
                cells[i].innerHTML = currentPlayer;
                checkWinner();
                if (opponent === "C" && !gameOver) {
                    makeComputerMove();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    }
};

const winCondition = (a, b, c) => cells[a].innerHTML !== '' && cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML;

const checkWinner = () => {
    const winningPositions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
    for (let i = 0; i < winningPositions.length; i++){
        const [a, b, c] = winningPositions[i];
        if (winCondition(a, b, c)){
            gameOver = true;
            statusDisplay.innerHTML = `${currentPlayer} wins!`;
        }
    }
}
