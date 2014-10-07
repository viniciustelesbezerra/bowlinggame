describe("Game", function() {
  var game;

  beforeEach(function() { game = new startGame; });

  var rollForMe = function(pins, times) {
    times = times || 20;
    for (var i = 0; i < times; i++) game.roll(pins);
  };

  it("all ones", function() {
    rollForMe(1);
    expect(game.score()).toEqual(20);
  });

  it("all zeros", function() {
    rollForMe(0);
    expect(game.score()).toEqual(0);
  });

  it("perfect game", function() {
    rollForMe(10 , 12);
    expect(game.score()).toEqual(300);
  });

  it("bonus spare", function() {
    rollForMe(5, 2);
    game.roll(2);
    rollForMe(0 , 17);
    expect(game.score()).toEqual(14);
  });
});