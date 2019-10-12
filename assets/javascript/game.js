//baseline for any jQuery function according to this video https://www.youtube.com/watch?v=hMxGhHNOkCU: $(document).ready(function()) {

//} ;
//function to generate 'random' number:
$(document).ready(function(){
// Declare variables and set initial value here
let currentScore = 0;
let numberb = 0;
let numberg = 0;
let numberr = 0;
let numbery = 0;
let wins = [];
let losses = [];

//random number gets generated (between 19-120) resource: https://www.w3schools.com/jsref/jsref_random.asp 
//article explaining it's not really random: https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
function randomNumber () {
// Remove all `let` keywords from functions
    number = Math.floor((Math.random() * 101) + 19);
    console.log(number + " random number");
    return number;  
    };
//getting the random number to show on the screen (the number the player has to match to win the game) resource: https://api.jquery.com/html/
$("div.randominteger").text(randomNumber());

function blueValue () {
    numberb = Math.floor((Math.random()* 12) + 1);
    console.log(numberb + " blue value");
    return numberb;
}
blueValue();

function greenValue () {
    numberg = Math.floor((Math.random()* 12) + 1);
    console.log(numberg + " green value");
    return numberg;
}
greenValue();

function redValue () {
    numberr = Math.floor((Math.random()* 12) + 1);
    console.log(numberr + " red value");
    return numberr;
}
redValue();

function yellowValue () {
    numbery = Math.floor((Math.random()* 12) + 1);
    console.log(numbery + " yellow value");
    return numbery;
}
yellowValue();

// reset Game function (when the player wins or loses I will call this function)
//reset: random number, score, and jewel values

function GameRestart () {
    $("div.randominteger").text(randomNumber());
    blueValue();
    greenValue();
    redValue();
    yellowValue();
};

//source: https://stackoverflow.com/questions/7381712/how-to-reset-my-score-javascript
function resetScore () {
    currentScore = 0;
    $("div.totalscoreinteger").text("0");
};

//on click function for each jewel
//add total score value with each jewel click
//if the user clicks on consequent crystals a number gets added to score (cumulative)
//reset game when scores matches random number (win) or exceeds random number (loss)
//thanks to Dan and Naima for help on developing these functions
$(".one").click(function (){
    currentScore += numberb;
    console.log('number b', numberb);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
// Put return at end of functions
// return is what ends the function
    if (currentScore === number) {
        wins++;
        $("span.winsinteger").html(+wins);
        GameRestart();
        resetScore();
    }
    else if (currentScore > number) {
        losses++;
        $("span.lossesinteger").html(+losses);
        GameRestart();
        resetScore();
    };
});

$(".two").click(function (){
    currentScore += numberg;
    console.log('number g', numberg);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    if (currentScore === number) {
        wins++;
        $("span.winsinteger").html(+wins);
        GameRestart();
        resetScore();
    }
    else if (currentScore > number) {
        losses++;
        $("span.lossesinteger").html(+losses);
        GameRestart();
        resetScore();
    };
});

$(".three").click(function (){
    currentScore += numberr;
    console.log('number r', numberr);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    if (currentScore === number) {
        wins++;
        $("span.winsinteger").html(+wins);
        GameRestart();
        resetScore();
    }
    else if (currentScore > number) {
        losses++;
        $("span.lossesinteger").html(+losses);
        GameRestart();
        resetScore();
    };
});

$(".four").click(function (){
    currentScore += numbery;
    console.log('number y', numbery);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    if (currentScore === number) {
        wins++;
        $("span.winsinteger").html(+wins);
        GameRestart();
        resetScore();
    }
    else if (currentScore > number) {
        losses++;
        $("span.lossesinteger").html(+losses);
        GameRestart();
        resetScore();
    };
});

});