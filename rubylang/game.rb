class Game
  def initialize
    @rolls, @currentRoll = [], 0
  end

  def roll(pins)
    @rolls.push pins
  end

  def score
    score, frameIndex = 0, 0

    10.times do
      if (isStrike(frameIndex))
        score += 10 + strikeBonus(frameIndex)
        frameIndex += 1
      elsif (isSpare(frameIndex))
        score += 10 + spareBonus(frameIndex)
        frameIndex += 2
      else
        score += sumOfBallsInFrame(frameIndex)
        frameIndex += 2
      end
    end

    score
  end

  def isStrike(frameIndex)
    @rolls[frameIndex] == 10
  end

  def sumOfBallsInFrame(frameIndex)
    @rolls[frameIndex] + @rolls[frameIndex+1]
  end

  def spareBonus(frameIndex)
    @rolls[frameIndex+2]
  end

  def strikeBonus(frameIndex)
    @rolls[frameIndex+1] + @rolls[frameIndex+2]
  end

  def isSpare(frameIndex)
    @rolls[frameIndex] + @rolls[frameIndex+1] == 10
  end
end