from datetime import datetime
import uuid  # Import the uuid module

class User:
    def __init__(self, username, playerNum):
        self.id = int(uuid.uuid4().hex, 16)
        self.username = username
        self.playerNum = playerNum
        self.joined_at = datetime.now()

    def getUsername(self):
        return self.username
    
    def getGroupSize(self):
        return self.playerNum
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'playerNum': self.playerNum,
            'joined_at': self.joined_at.isoformat()
        }