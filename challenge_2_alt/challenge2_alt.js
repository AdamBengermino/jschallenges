/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */


$(function(){
var shootButtonOne = $('#teamone-shoot');
var shootButtonTwo = $('#teamtwo-shoot');
var resetButton = $('#reset');
var counter1 = 0;
var counter2 = 0;
var resetCounter = 0;
var teamOneHits = 0;
var teamTwoHits = 0;


function getRandomIntInclusive() {
min = Math.ceil(0);
max = Math.floor(1);
return Math.floor(Math.random() * (max - min + 1)) + min;
};



shootButtonOne.click(function(){
   counter1++;
   $('#teamone-numshots').html(counter1);
   var result = getRandomIntInclusive();
   if (result ==1){
       $('body').css('background-image', 'URL(http://cdn.wallpapersafari.com/22/26/pu9ioM.jpg');
       alert("SCORE!")
       teamOneHits++;
       $('#teamone-numhits').html(teamOneHits);
}
else {
       $('body').css('background-image','URL(http://www.desktopimages.org/pictures/2014/0103/1/orig_480130.jpg');
       alert("Miss :(")
}

});


shootButtonTwo.click(function(){
   counter2++;
   $('#teamtwo-numshots').html(counter2);
   var result = getRandomIntInclusive();
   if (result ==1){
       $('body').css('background-image', 'URL(http://eskipaper.com/images/arsenal-fc-7.jpg');
       alert("SCORE!")
       teamTwoHits++;
       $('#teamtwo-numhits').html(teamTwoHits);
}
else {
       $('body').css('background-image','URL(http://www.desktopimages.org/pictures/2014/0103/1/orig_480130.jpg');
       alert("Miss :(")
}

});

resetButton.click(function(){
   $('body').css('background-image','URL(http://www.desktopimages.org/pictures/2014/0103/1/orig_480130.jpg');
   resetCounter++;
   counter1 = 0;
   counter2 = 0;
   teamOneHits = 0;
   teamTwoHits = 0;
   $('#num-resets').html(resetCounter)
   $('#teamone-numshots').html(counter1);
   $('#teamtwo-numshots').html(counter2);
   $('#teamone-numhits').html(teamOneHits);
   $('#teamtwo-numhits').html(teamTwoHits);
});





})