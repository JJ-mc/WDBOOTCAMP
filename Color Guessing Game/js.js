var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }

    for(var i=0; i<squares.length; i++) {
        //add click listener
        squares[i].addEventListener("click", function() {
            //Grab color of clicked square
            //Compare color to picked
            if(this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(this.style.backgroundColor);
                h1.style.backgroundColor = this.style.backgroundColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    reset();
    
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}


// easy.addEventListener("click", function() {
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i<squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hard.addEventListener("click", function() {
//     easy.classList.remove("selected");
//     hard.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i<squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});




function changeColors (color) {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for( var i = 0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    return "rgb(" +Math.floor(Math.random() * 256) 
    +", " +Math.floor(Math.random() * 256) 
    +", " +Math.floor(Math.random() * 256) 
    +")";
}