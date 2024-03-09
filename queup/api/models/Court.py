class Court:
    time_played = 0
    nextCourt = None

    def __init__(self, id):
        self.id = id
        self.occupied_by = None 

    def getUsers(self):
        return self.users

    def getUserPosition(self, name):
        return self.users.index(name)