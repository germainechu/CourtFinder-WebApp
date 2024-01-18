from queue import Queue

class LocationQueue(Queue):  
    def __init__(self):
        super().__init__() # Inherits from Queue
        # Other attributes specific to LocationQueue can be added here