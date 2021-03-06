import unittest2
from Game import Game

class GameTest(unittest2.TestCase):
  def setUp(self):
    self.game = Game()

  def testGutterGame(self):
    self.rollForMe(0)
    self.assertEqual(self.game.score(), 0)

  def testAllOnes(self):
    self.rollForMe(1)
    self.assertEqual(self.game.score(), 20)

  def testPerfectGame(self):
    self.rollForMe(10, 12)
    self.assertEqual(self.game.score(), 300)

  def testSpare(self):
    self.rollForMe(5, 2)
    self.rollForMe(2, 1)
    self.rollForMe(0, 17)
    self.assertEqual(self.game.score(), 14)

  def rollForMe(self, pins, times=20):
    for element in range(times):
      self.game.roll(pins)

if __name__ == '__main__':
  unittest2.main()