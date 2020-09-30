var numOfSquares = 6;
var colours = [];
var pickedColour;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

initial();

function initial() {
    setupModeBtn();
    setupSquare();
    reset();
};

function setupModeBtn() {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            modeBtn[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numOfSquares = 3
            } else if (this.textContent === "Normal") {
                numOfSquares = 6;
            } else {
                numOfSquares = 9;
            }
            reset();
        })
    }
};

function setupSquare() {
    for (let i = 0; i < squares.length; i++) {
        // add click events to squares
        squares[i].addEventListener("click", function () {
            // grab colour of clicked square
            var clickedColour = this.style.backgroundColor;
            // compare colour to clicked square
            if (clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColour(clickedColour);
                h1.style.backgroundColor = clickedColour;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again.";
            }
        });
    }
};

function reset() {
    // generate all new colour
    colours = genRandomColours(numOfSquares);
    // pick a new random colour from the arr
    pickedColour = pickColour();
    // change colourDisplay to match picked colour
    colourDisplay.textContent = pickedColour;
    resetBtn.textContent = "New Colours";
    messageDisplay.textContent = "";
    // change colours of the squares
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
};

resetBtn.addEventListener("click", function () {
    reset();
});

function genRandomColours(num) {
    // make an array 
    var arr = [];
    // repeat num times 
    for (let i = 0; i < num; i++) {
        // get random colour and push to arr
        arr.push(randomColour());
    }
    // return that array
    return arr;
};

function randomColour() {
    // pick a 'red' from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a 'green' from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
};

function changeColour(colour) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each colour to given colours
        squares[i].style.backgroundColor = colour;
    }
};
