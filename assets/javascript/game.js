//function to generate 'random' number:
$(document).ready(function(){
let currentScore = 0;
let numberb = 0;
let numberg = 0;
let numberr = 0;
let numbery = 0;

// Declare variables and set initial value here

//random number gets generated (between 19-120) resource: https://www.w3schools.com/jsref/jsref_random.asp 
//article explaining it's not really random: https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
function randomNumber () {
    // Remove all `let` keywords from functions
    let number = Math.floor((Math.random() * 101) + 19);
    console.log(number + " random number");
    return number;  
    }
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

//on click function for each jewel
//add total score value with each jewel click
$(".one").click(function (){
    currentScore += numberb;
    console.log('number b', numberb);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    // Put return at end of functions
    // return is what ends the function
    return numberb;
});

$(".two").click(function (){
    currentScore += numberg;
    console.log('number g', numberg);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    return numberg;
});

$(".three").click(function (){
    currentScore += numberr;
    console.log('number r', numberr);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    return numberr;
});

$(".four").click(function (){
    currentScore += numbery;
    console.log('number y', numbery);
    console.log('current score', currentScore);
    $("div.totalscoreinteger").html(currentScore);
    return numbery;
});

});

// $("#btn-choice").click(function(event) {
//     userChoice = this.id;
//     test();
// });

//if the user clicks on consequent crystals a number gets added to score (cumulative)

//baseline for any jQuery function according to this video https://www.youtube.com/watch?v=hMxGhHNOkCU: $(document).ready(function()) {

//} ;

//jQuery to manipulate CSS

//when the score goes past the random number then the user loses

//when the score is a match to the number generated then the user wins

//when the user wins the wins go up

//when the user loses then the wins go up

//whenever the player wins the random number resets

//whenever the player loses the random number resets

//link this to the portfolio of the first assignment*******