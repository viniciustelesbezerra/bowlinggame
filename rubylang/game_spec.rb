require "./spec_helper"
require "./game"

describe Game do
  let!(:game) { Game.new }

  it "returns 0 for all gutter game" do
    20.times { game.roll 0 }
    expect(game.score).to eq 0
  end

  it "return for all ones game" do
    20.times { game.roll 1 }
    expect(game.score).to eq 20
  end

  it "the perfect game" do
    20.times { game.roll 10 }
    expect(game.score).to eq 300
  end

  it "make a spare" do
    18.times { game.roll 0 }
    2.times { game.roll 5 }
    game.roll 3
    expect(game.score).to eq 13
  end
end