var buttonColor = ["red", "blue","green","yellow"];
var gamePattern = [];
var randomChosenColor = "";
var userClickedPattern = [];

var gameStarted = false
var level = 0;

$(document).on("keydown", function(){
    if (!gameStarted) {
        gameStarted = true;
        nextSequeence();
        $("h1").text("Level "+level)

}})

$(".btn").on("click",function(event){
    console.log(this.id)
    var userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
    console.log(userClickedPattern)

    
})


function nextSequeence () {
  userClickedPattern = [];
  level++
  var randomNumber = Math.floor(Math.random()*4)
  randomChosenColor = buttonColor[randomNumber]
  gamePattern.push(randomChosenColor)
  playSound(randomChosenColor)
  $("h1").text("Level "+level)
  console.log(userClickedPattern)
  console.log(gamePattern)


  


}



function playSound(key){
    $("#"+key).fadeOut().fadeIn()
    var audio = new Audio("sounds/"+key+".mp3")
    audio.play()
}




function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequeence();
            }, 1000);
    }}   else {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  