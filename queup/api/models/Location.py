from Court import Court
from CourtList import CourtList 
from QueueList import QueueList
class Location: 
    # a location has an id, name, a list of court
    def __init__(self, id, name, court_num): #pass the head and tail of the initailized court list to location
        self.id = id
        self.name = name
        self.queuelist = QueueList() # initialize an empty queue list 
        self.courList = CourtList(court_num) # instantiate teh courtlist with the num of courts
        
    def getCurrentQueue(self):
        return self.queuelist
    
    def getFrontCourt(self):
        return self.courList.head
