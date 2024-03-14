from datetime import datetime
# User needs to persist in the databse
class User:
    def __init__(self, username, playerNum):
        self.username = username
        self.playerNum = playerNum
        self.joined_at = datetime.now()

    def getUsername(self):
        return self.username
    
    def getGroupSize(self):
        return self.playerNum

# a user doesn't need to know which court they are playing on
# but a court should know which user is occupying the court