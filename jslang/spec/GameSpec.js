describe("Game", function() {
  var game;

  beforeEach(function() { game = new startGame; });

  it("all ones", function() {
    var i = 0;
    while (i < 10) {
      game.roll(1); i++;
      console.log(i);
    }

    console.log(game.score());
    expect(game.score()).toEqual(10);
  });

  it("all zeros", function() {
    game.roll(1);
    console.log(game.score());
    expect(game.score()).toEqual(1);
  });
});