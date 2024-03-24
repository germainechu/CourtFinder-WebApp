class Location: 
    # a location has an id, name, a list of court
    def __init__(self, id, name, queueList, courList): #pass the head and tail of the initailized court list to location
        self.id = id
        self.name = name
        self.queueList = queueList
        self.courList = courList 

    def toDict(self):
        return {
            'id': self.id,
            'name': self.name,
            'queue_list': self.queue_list.toDict(),
            'court_list_id': self.courList.toDict()
        }