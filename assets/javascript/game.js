//random number gets generated (between 19-120) resource: https://www.w3schools.com/jsref/jsref_random.asp
//article explaining it's not really random: https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131

$(document).ready(function(){
//function to generate 'random' number:   
    function randomNumber () {
        let number = Math.floor((Math.random() * 101) + 19);
        console.log(number + " random number");
        return number;
    }
    randomNumber();
//getting the random number to show on the screen: 



})




//four crystals get assigned random numbers/scores (between 1-12)

//as the user clicks on each crystal a number gets added to score

//if the user clicks on consequent crystals a number gets added to score (cumulative)

//baseline for any jQuery function according to this video https://www.youtube.com/watch?v=hMxGhHNOkCU: $(document).ready(function()) {

//} ;

//when the score goes past the random number then the user loses

//when the score is a match to the number generated then the user wins

//when the user wins the wins go up

//when the user loses then the wins go up

//whenever the player wins or loses then the game resets

//link this to the portfolio of the first assignment*******