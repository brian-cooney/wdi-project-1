/*
WHACK A MOLE STYLE GAME USING randomly generated #hex values - Version 1
Using photos of the WDI class as objects to click on a grid.
The player has a set amount of time to click as many objects as possible
score is recored for each round
Speed of game play increases as the rounds progress.

SUDO CODE
Get photos to randomly appear on the grid.
The photos should disappear when clicked.
All images turned to display off, jquery toggles display on randomly.
Add countdown timer to game
keep track of the player score
*/
let playerScore = 0;
let levelSpeed;
let gameInterval;

$(init);

function init() {
  levelSpeed = 2000;
  // $('.easy').addClass('toggleButton');
  // $('.hard').removeClass('toggleButton');
  $('.hexRandom').on('click', chooseSquare);
  $('.start').one('click', chooseDifficulty);
  $('.easy').on('click', setGameLevel);
  $('.hard').on('click', setGameLevel);
  $('.reset').on('click', resetGame);
}

function chooseSquare() {
  if ($(this).hasClass('hexColor')) {
    const buttonColor = $(this).css('background');
    $('body').css('background', buttonColor);
    $('h1, h2').css('color', '#fff');
    console.log('hit');
    playerScore++;
    $('.score span').html(playerScore);
  }
}

function setGameLevel() {
  // if ($(this).hasClass('easy')) {
  //   $(this).toggleClass('selected');
  //   if ($(this).hasClass('selected')) {
  //     $('.hard').toggleClass('selected');
  //   }
  // }




  // if ($(this).hasClass('selected')) {
  //   levelSpeed = $(this).attr('id');
  //   console.log(levelSpeed);
  // }

  if ($(this).hasClass('easy')) {
    $(this).toggleClass('selected');
    if ($('.hard').hasClass('selected')) {
      $('.hard').toggleClass('selected');
    }
    levelSpeed = 2000;
  } else {
    $(this).toggleClass('selected');
    if ($('.easy').hasClass('selected')) {
      $('.easy').toggleClass('selected');
    }
    levelSpeed = 500;
  }
}

function chooseDifficulty() {
  $('.difficulty').removeClass('hidden');
  $('.start').html('Confirm');
  $('.start').one('click', startGame);
}

function startGame() {
  $('.difficulty').addClass('hidden');
  $('.start').html('Reset');
  $('.start').one('click', resetGame);
  gameInterval = setInterval(displayRandomColors, levelSpeed);
  gameTimer();
}

function displayRandomColors() {
  // Pick a random index out of the index of .photos
  let randomIndex = Math.floor(Math.random() * $('.hexRandom').length);
  let randomColour = $('.hexRandom')[randomIndex];
  // // Turn into a jQuery object
  let $random     = $(randomColour);

  $random.addClass('hexColor');
  $random.css('background', randomHexValue());

  setTimeout(() => {
    $random.removeClass('hexColor');
    $random.css('background', '');
  }, 1000);
}

function gameTimer() {
  var setTime = 11;
  var liveCount = setInterval(countDown,1000);

  function countDown(){
    setTime--;
    if(setTime === 0){
      clearInterval(liveCount);
      clearInterval(gameInterval);
    }
    $('.timer span').text(setTime);
    console.log(setTime);
  }
}

function randomHexValue() {
  var hexValues = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let hex = '';

  for (var i = 0; i < 6; i++) {
    const randomValue = hexValues[Math.floor(Math.random() * hexValues.length)];
    hex += randomValue;
    console.log('hex');
  }
  // console.log(`#${hex}`);
  return `#${hex}`
}

function resetGame() {
  $('.start').html('Start');
  $('.start').one('click', chooseDifficulty);
  // console.log('working');
  // var $audio = document.getElementById('audio');
  // $audio.src = 'https://www.soundjay.com/door/doorbell-1.mp3';
  // $audio.play();
  // clearInterval(liveCount);
  // gameTimer.clear();
  // $('.reset')[0].play();
}

//reset button should clear functions
//mobile responsive
