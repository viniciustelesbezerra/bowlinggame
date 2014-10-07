describe("Game", function() {
  var game;

  beforeEach(function() { game = new startGame; });

  it("all ones", function() {
    for (var i = 0; i < 20; i++)
      game.roll(1);

    expect(game.score()).toEqual(20);
  });

  it("all zeros", function() {
    for (var i = 0; i < 20; i++)
      game.roll(0); 

    expect(game.score()).toEqual(0);
  });
});