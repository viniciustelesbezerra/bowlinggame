var startGame = (function() {
  function startGame() {;
    this.rolls = [], this.currentRolls = 0;
  };

  startGame.prototype.roll = function(pins) {
    this.rolls.push(pins);
  };

  startGame.prototype.score = function() {
    var score = 0, frameIndex = 0;

    for (var i = 0; i < 10; i++) {
      score += this.sumOfBallsInFrame(frameIndex)
      frameIndex += 2;
    }

    return score;
  };

  startGame.prototype.sumOfBallsInFrame = function(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1]
  };

  return startGame; })();