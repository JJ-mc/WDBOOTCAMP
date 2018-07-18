//comment
document.querySelectorAll("button")[0].addEventListener("click", function() {
    document.body.classList.toggle("purple");
});

var button1 = document.querySelectorAll("button")[1];
var button2 = document.querySelectorAll("button")[2];
var button3 = document.querySelectorAll("button")[3];
var p1display = document.querySelectorAll("h1 span")[0];
var p2display = document.querySelectorAll("h1 span")[1];
var scoredisplay = document.querySelector("p span");
var numInput = document.getElementsByTagName("input")[0];
var p1counter = 0;
var p2counter = 0;
var game_over = false;
var winning_score = 5;


button1.addEventListener("click", function() {
    if(!game_over) {
        p1display.innerHTML = ++p1counter;
        if(winning_score == p1counter) {
            game_over = true;
            p1display.classList.add("winner");
        }
    }
});
button2.addEventListener("click", function() {
    if(!game_over) {
        p2display.innerHTML = ++p2counter;
        if(winning_score == p2counter) {
            game_over = true;
            p2display.classList.add("winner");
        }
    }
});

button3.addEventListener("click", function() {
    resetGame();
});

numInput.addEventListener("change", function() {
    winning_score = this.value;
    scoredisplay.innerHTML = this.value;
    resetGame();
});


function resetGame() {
    p1counter = p2counter = 0;
    p1display.innerHTML = p2display.innerHTML = p1counter;
    game_over = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");

};