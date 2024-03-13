from User import User
class QueueList:
    def __init__(self):
        self.users = [] # initialized with an empty array
    
    def addUser(self, user): # append 
        self.users.append(user)

    # this function should take out the first user in the queue and return it
    def popFirst(self):
        return self.users.pop()

## example usecases
user1 = User("Celine", 2)
user2 = User("Tim", 4)

queue = QueueList()
queue.addUser(user2)
firstUser = queue.popFirst()
print(firstUser.username)