// var Game = require('../game').startGame;
var Game = require('../game');
var assert = require('assert');

describe('Game', function(){
	var game;

	beforeEach(function() { game = new Game; });

	var rollForMe = function(pins, times) {
	  times = times || 20;
	  for (var i = 0; i < times; i++) game.roll(pins);
	};

    it('Game', function(){
      rollForMe(1);
      assert.equal(20, game.score());
    })
})