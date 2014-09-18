# import unittest2
from Game import Game

# class GameTest(unittest2.TestCase):
#   def setUp(self):
#     self.game = Game()

#   def testGutterGame(self):
#     self.game.roll(1)
#     self.assertEqual(self.game.score, 1)

# if __name__ == '__main__':
#   unittest2.main()

game = Game()

for element in range(21):
  game.roll(1)

# print dir(game.rolls)
print game.rolls.count

# game.score()
# print game.score_number