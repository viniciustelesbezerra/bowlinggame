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

  it("perfect game", function() {
    for (var i = 0; i < 12; i++)
      game.roll(10);

    expect(game.score()).toEqual(300);
  });

  it("bonus spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);

    for (var i = 0; i < 17; i++)
      game.roll(0);

    expect(game.score()).toEqual(14);
  });
});