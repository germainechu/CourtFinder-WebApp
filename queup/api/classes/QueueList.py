class QueueList:
    def __init__(self):
        self.users = [] # initialized with an empty array
    
    def addUser(self, user): # append 
        self.users.append(user)

    # this function should take out the first user in the queue and return it
    def popFirst(self):
        if self.users:
            return self.users.pop(0)
        return None
    
    def toDict(self):
        return [user.toDict() for user in self.users]