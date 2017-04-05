/*
WHACK A MOLE STYLE GAME USING WDI STUDENT PORTRAITS - Version 1
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

$(init);

function init() {
  $('.photo').on('click', chooseSquare);
  $('.start').on('click', start);
}

function chooseSquare() {
  if ($(this).hasClass('person')) {
    const buttonColor = $(this).css('background');

    $('body').css('background', buttonColor);

    console.log('hit');
    playerScore++;
    $('.score').html('Player score: ' + playerScore);
    // Update the dom
  }
}

function start() {
  if ($('.easy').on('click')) {
    levelSpeed = 1500;
  } else {
    levelSpeed = 500;
  }
  gameInterval = setInterval(displayRandomPhotos, levelSpeed);
  gameTimer();
}

function displayRandomPhotos() {
  // Pick a random index out of the index of .photos
  let randomIndex = Math.floor(Math.random() * $('.photo').length);
  let randomPhoto = $('.photo')[randomIndex];
  // // Turn into a jQuery object
  let $random     = $(randomPhoto);
  // while ($random.hasClass('person')) {
  //   randomIndex = Math.floor(Math.random() * $('.photo').length);
  //   randomPhoto = $('.photo')[randomIndex];
  //   $random     = $(randomPhoto);
  // }
  $random.addClass('person');
  // // Choose a random image
  // const randomImage = images[Math.floor(Math.random() * images.length)];
  // $random.css('background', `url("${randomImage}")`);

  $random.css('background', randomHexValue());

  setTimeout(() => {
    $random.removeClass('person');
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
    $('.screen').text('Time remaining: ' + setTime);
    console.log(setTime);
  }
}

function randomHexValue() {
  var hexValues = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let hex = '';

  for (var i = 0; i < 6; i++) {
    const randomValue = hexValues[Math.floor(Math.random()*hexValues.length)];
    hex += randomValue;
  }

  return `#${hex}`
}
