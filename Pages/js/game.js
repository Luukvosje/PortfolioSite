var score = 0;
var level = 1;
var lives = 3;
var peerLives = 2;
var timeToFall = 15;
var timeToFallPeer = 3;
var highscore = window.localStorage.getItem('highscore') || 0;
$(".high-score-count").html(highscore)



function lose() {
    clearScreen();
    if (highscore < score) {
      $(".high-score-count").html(score);
      window.localStorage.setItem('highscore', score);
    }
    $(".lost").show();
}

function randomPosition() {
    var screenWidth = $(window).width();
    var randomPosition = Math.floor(Math.random() * screenWidth - 180);
    if (randomPosition < 0) {
        randomPosition = 0;
    }
    return randomPosition;
}

function drawBlock() {
    $(".game").append(
        `<div style="left:${randomPosition()}px; animation: fallingBlocks ${timeToFall - level}s linear, rotateApple 1s infinite linear" class="block"></div>`
    );

    addEventsToBlock();
}


function addEventsToBlock() {
    $(".block").off("click");

    $(".block").on("click", function() {
        score++;
        if (score % 5 == 0) {
            level++;
        }
        updateHTML();
        $(this).remove();
    });
}

function updateHTML() {
    $(".level-count").html(level);
    $(".score-count").html(score);
    $(".lives-count").html(lives);

}

    $(".buttonstart.start").on("click", function(){
        startGame();
        $(".start").hide();
    });

function checkIfLost() {
    $(".block").each(function(index, block) {
        var position = $(block)
            .css("bottom")
            .replace("px", "");
        if (position < 0) {
          $(block).remove();
          lives --;
          checkLives()
}
})
}

function checkLives() {
  if(lives < 1){
    lose()
  }
  updateHTML();
}


$(".button.lost").on("click", function() {
    reset();
});

$(window).on("keydown", event => {
    if (event.keyCode == 32) {
        reset();
    }
});

function reset() {
    clearScreen();
    $(".lost").hide();
    level = 1;
    score = 0;
    lives = 3;
    updateHTML();
    startGame();
}

function startGame() {
    blockLoop = setInterval(drawBlock, 1000);
    check = setInterval(checkIfLost, 500);
}   

function clearScreen() {
    clearInterval(check);
    clearInterval(blockLoop);
    $(".block").remove();
}