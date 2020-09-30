var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var resetBtn = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;


p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

resetBtn.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function () {
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = this.value;
    reset();
});
