class Court:
    def __init__(self, id): # initialize new court class
        self.id = id
        self.occupied=False
        self.occupied_by = None
        self.next = None

    # make a court available 
    def freeCourt(self):
        self.occupied_by = None
        self.occupied = False
    
    # occupy a court by a user
    def occupyCourt(self, user):
        self.occupied = True
        self.occupied_by = user.username
    
    def toDict(self):
        return {'id': self.id, "occupied": self.occupied, "occupied_by":self.occupied_by, "next_id": self.next.id}
