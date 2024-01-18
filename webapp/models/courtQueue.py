from queue import Queue

class CourtQueue(Queue): 
    def __init__(self):
        super().__init__()  # Inherits from Queue
        