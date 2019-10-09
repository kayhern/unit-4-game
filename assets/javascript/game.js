//function to generate 'random' number:
$(document).ready(function(){  
//random number gets generated (between 19-120) resource: https://www.w3schools.com/jsref/jsref_random.asp 
//article explaining it's not really random: https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
    function randomNumber () {
        let number = Math.floor((Math.random() * 101) + 19);
        console.log(number + " random number");
        return number;  
    }
    randomNumber(); 
    //getting the random number to show on the screen (the number the player has to match to win the game) resource: https://api.jquery.com/html/
    $("div.randominteger").text(randomNumber());
});

//four crystals get assigned random numbers/scores (between 1-12)
$(document).ready(function() {
//assigning value to crystals using same prinicples as above. Here we make the random number from 1-12:
let numberb = blueValue();
let numberg = greenValue();
let numberr = redValue();
let numbery = yellowValue();

    function blueValue () {
        let numberb = Math.floor((Math.random()* 12) + 1);
        console.log(number + " blue value");
        return numberb;
    }
    blueValue();

    function greenValue () {
        let numberg = Math.floor((Math.random()* 12) + 1);
        console.log(number + " green value");
        return numberg;
    }
    greenValue();

    function redValue () {
        let numberr = Math.floor((Math.random()* 12) + 1);
        console.log(number + " red value");
        return numberr;
    }
    redValue();

    function yellowValue () {
        let numbery = Math.floor((Math.random()* 12) + 1);
        console.log(number + " yellow value");
        return numbery;
    }
    yellowValue();

//defining value to each jewel using above functions attempting to make jewel value static for one game

let numberb = blueValue();
let numberg = greenValue();
let numberr = redValue();
let numbery = yellowValue();    

    $("img.one", "img.two", "img.three", "img.four").click(function(score){
// we need a trigger to make clicking on each jewel contribute to total score
    });



});


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