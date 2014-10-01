require "./spec_helper"
require "./game"
require "benchmark"

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

  context "the perfect game" do 
    it "score 300" do
      12.times { game.roll 10 }
      expect(game.score).to eq 300
    end

    it "stress" do
      time = Benchmark.bm { |x| x.report { 12.times { game.roll 10 } } }
      expect(time[0].real).to be < 0.000100
    end
  end

  it "one bonus spare" do
    2.times { game.roll 5 }
    game.roll 2
    17.times { game.roll 0 }
    expect(game.score).to eq 14
  end
end