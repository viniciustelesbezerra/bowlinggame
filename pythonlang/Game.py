import sys

class Game:
  def __init__(self):
    self.rolls = []
    self.currentRoll = 0
    self.scoreNumber = 0

  def roll(self, pins):
    # self.rolls[self.currentRoll] = pins
    # self.currentRoll += 1
    self.rolls.append(pins)

  def score(self):
    score = 0
    frameIndex = 0

    for element in range(10):
      if (self.isStrike(frameIndex)):
        score += 10 + self.strikeBonus(frameIndex)
        ++frameIndex
      elif (self.isSpare(frameIndex)):
        score += 10 + self.spareBonus(frameIndex)
        frameIndex += 2
      else:
        score += self.sumOfBallsInFrame(frameIndex)
        frameIndex += 2

    self.scoreNumber = score
    return score

  def isStrike(self, frameIndex):
    self.rolls[frameIndex] == 10

  def sumOfBallsInFrame(self, frameIndex):
    self.rolls[frameIndex] + self.rolls[frameIndex+1]

  def spareBonus(self, frameIndex):
    self.rolls[frameIndex+2]

  def strikeBonus(self, frameIndex):
    self.rolls[frameIndex+1] + self.rolls[frameIndex+2]

  def isSpare(self, frameIndex):
    self.rolls[frameIndex] + self.rolls[frameIndex+1] == 10