from datetime import datetime
# User needs to persist in the databse
class User:
    def __init__(self, username, playerNum):
        self.username = username
        self.playerNum = playerNum
        self.joined_at = datetime.now()

    def getUsers(self):
        return self.users

    def getUserPosition(self, name):
        return self.users.index(name)