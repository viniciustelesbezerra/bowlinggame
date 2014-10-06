var startGame = (function() {
  function startGame() {
    this.rolls = [];
  };

  startGame.prototype.roll = function(pins) {
    this.rolls.push(pins);
  };

  startGame.prototype.score = function() {
    return this.rolls.reduce(function(a, b) { return a + b; });
  };

  return startGame; })();