from Court import Court
from QueueList import QueueList
class Location: 
    # a location has an id, name, a list of court
    def __init__(self, id, name, courtList): #pass the head and tail of the initailized court list to location
        self.id = id
        self.name = name
        self.queuelist = QueueList()
        self.courList = courtList
        

    def getCurrentQueue(self):
        return self.queuelist
    
    def getFrontCourt(self):
        return self.head