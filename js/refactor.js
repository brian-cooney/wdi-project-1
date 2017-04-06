var Game = Game || {};

Game.init = function() {
  this.playerScore = 0;
  this.levelSpeed  = 2000;
  this.gameInterval;

  $('.start').one('click', this.chooseDifficulty.bind(this));
  $('.easy').on('click', this.setGameLevel);
  $('.hard').on('click', this.setGameLevel);
  $('.hexRandom').on('click', this.chooseSquare);
};

Game.chooseDifficulty = function() {
  $('.difficulty').removeClass('hidden');
  $('.start').html('Confirm');
  $('.start').one('click', this.startGame.bind(this));
};

Game.startGame = function() {
  $('.difficulty').addClass('hidden');
  $('.start').html('Reset');
  $('.start').one('click', this.resetGame);
  this.gameInterval = setInterval(this.displayRandomColors, this.levelSpeed);
  this.gameTimer();
};

$(Game.init.bind(Game));
