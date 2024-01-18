import datetime
from user import User

class Queue:
    def __init__(self):
        self.joined_at = datetime.now()
        self.users = []  # List to hold users in the queue

    def joinQueue(self, user: User):
        self.users.append(user)
    
    def getUsers(self):
        return self.users
    
    def getUserPosition(self, name):
        return self.users.index(name)
    
    