import time

firstName = input("\n\nHello player! Before we get started what is your name?\n\n")
print("\n\nHowdy,", firstName)

time.sleep(2)

firstMessage = print("""
In the desert near a town called Tumbleweed a duel is about to transpire between two cowboys...\n
You will play as Arthur, who needs to defeat Dutch which was once his closest friend.\n
""")

time.sleep(3)

class Characters:
    def __init__(self, name, health=50):
        self.name = name
        self.health = health
    def damageTaken(self, damage):
        self.health -= damage
        if hero.health <= 0:
            print("Nice try, but you spent so much time trying to punch him you died...\n")
            gameOverMenu()
    def surrender(self):
        print("Dutch catches you with with his lasso and pulls you back into the fight\n")
        time.sleep(1)
        print("Pick yourself back up partner!")
        return
    def healthMeat(self):
        while self.health <= 30:
            self.health += 10
            print("You pulled a piece of jerky from your back pocket and healed for 10 health.")
            return
        else:
            print("Lets not waste your healing yet")
            return
    def viewStats(self):
        print("Arthur's health is currently", (hero.health))
        print("Dutch's health is currently", villian.health)
 
hero = Characters("Arthur")
villian = Characters("Dutch")

def optionsMenu():
    message = int(input("""
Press 1 to Punch Dutch
Press 2 to Channel your DeadEye 
Press 3 to Lasso Dutch
Press 4 to Heal
Press 5 to Surrender
Press 6 to View stats
Press 7 to Quit game completely\n\n
    """))
    print(message)
    while message != '7':
        if message == 1:
            hero.damageTaken(20)
            print("""
You run up to Dutch and attempt to take him by suprise with a swift punch, but he was aware of your plan.\n\n
Dutch ducked out of the way, causing you to stumble onto the ground losing 20 health.\n\n""")
            optionsMenu()        
        if message == 2:
            if villian.health >= 30:
                print("Not yet partner! Dutch's health is too high.")
                optionsMenu()
            villian.damageTaken(25)
            
            
            print("""

             ,___________________________________________/7_ 
            |-_______------. `\                             |
        _,/ | _______)     |___\----------------------------`
   .__/`((  | _______      | (/))_______________=.
      `~) \ | _______)     |   /----------------_/
        `__y|______________|  /
        / ________ __________/
       / /#####\(  \  /     ))
      / /#######\\  \(     //
     / /########|)\______ad/`
    / /###(\)##// `------``
   / /########((
  / /##########))
 / /##########((
( (#####(/)####))
 \ \##########//
  \ \########((
   `----|_|---`
       ((_))
        `-`""")
            time.sleep(1)
            
            print("""
You pulled out your revolver and charged your deadeye ability. \n\n
Once fully charged you fire your weapon and with extreme accuracy hit Dutch with the final blow.\n\n\n\n""")
            time.sleep(3)
            
            print("""
You won your duel with Dutch! Congratulations.\n\n\n
I'd say it's time for a visit to the saloon!\n\n\n""")
            
            
            print("""
            
            _______________________________________________________________________________
                          .-|-|----------------|-|-.
                          | .-. .-. .  .-. .-. . . |_
                     .--~~| `-. |-| |  | | | | |\| | ~~--.
                     |    | `-' ` ' `- `-' `-' ' ' |     |
                     |    `-.____________________.-'     |
_______________      |                                   |
     |         |     |                                   |
  /  |   /  /  |     |                                   |
/    |     /   |     | _______                   _______ |
_____|_________|     ||       ~---_         _---~       ||
     |    /    |     ||           ~---. .---~           ||
 / / |         |     ||               | |               ||
  /  |  /   /  |     ||               | |               ||
_____|_________|     ||               | |               ||
---------------'     ||               | |               ||
                     ||               | |               ||
                     ||               | |               ||
                     ||           .---' `---.           ||
                     |`.______.---'         `---.______.'|
               ______|                                   |______
    --------~~~~~~~                                        ~~~~~~~--------
            
            """)
            
            time.sleep(2)
            gameOverMenu()
        elif message == 3:
            if villian.health <= 25: 
                print("pstttt use your DeadEye!")
                optionsMenu()
            
            villian.damageTaken(25)
            print("""
You pull your lasso from your back and the moment Dutch loses focus on you, you catch him by his feet, causing him to trip and lose 25 health.\n\n""")
            optionsMenu()    
        elif message == 4:
            hero.healthMeat()
            optionsMenu()
        elif message == 5:
             hero.surrender()
             optionsMenu()
        elif message == 6:
             hero.viewStats()
             optionsMenu()
        elif message == 7:
            print("Goodbye", firstName, "!")
            quit()
        else:
             print("Please print a valid option.")
             optionsMenu()
            
def gameOverMenu():
    gameOver = int(input("""
    Press 7 to quit"""))
    if gameOver == 7:
        print("\n\nGoodbye!", firstName)
        quit()
        
        
        
            
            
        
            

        

        
print("""
           ,,                               .-.
          || |                               ) )
          || |   ,                          '-'
          || |  | |
          || '--' |
    ,,    || .----'
   || |   || |
   |  '---'| |
   '------.| |                                  _____
   ((_))  || |      (  _                       / /|\ 
   (o o)  || |      ))("),                    | | | | |
____\_/___||_|_____((__^_))____________________\_\|/_/__



""")
optionsMenu()
