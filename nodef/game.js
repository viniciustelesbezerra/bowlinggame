var startGame = (function() {
  function startGame() {
    this.rolls = [], this.currentRolls = 0;
  };

  startGame.prototype.roll = function(pins) {
    this.rolls.push(pins);
  };

  startGame.prototype.score = function() {
    var score = 0, frameIndex = 0;

    for (var i = 0; i < 10; i++) {
      if(this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1; }
      else if(this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2; }
      else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2; }
    }

    return score;
  };

  startGame.prototype.isStrike = function(frameIndex) {
    return this.rolls[frameIndex] == 10;
  }

  startGame.prototype.sumOfBallsInFrame = function(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1];
  };

  startGame.prototype.spareBonus = function(frameIndex) {
    return this.rolls[frameIndex+2];
  }

  startGame.prototype.strikeBonus = function(frameIndex) {
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
  }

  startGame.prototype.isSpare = function(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10;
  }

  return startGame; })();

  // exports.startGame = startGame;
  module.exports = startGame;