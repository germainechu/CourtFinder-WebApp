from .User import User
from .Court import Court
from .CourtList import CourtList
from .QueueList import QueueList
from .Location import Location
import redis
import json
from models import Location, CourtList, QueueList

# Redis connection configuration
redis_host = 'localhost'
redis_port = 6379
redis_db = 0

# Create a Redis connection
redis_conn = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db)


queenElizabeth = Location(1, "queen_elizabeth", QueueList(), CourtList(16))
stanleyPark1 = Location(2, "stanley_park1", QueueList(), CourtList(12))
stanleyPark2 = Location(3, "stanley_park2", QueueList(), CourtList(6))
kitslano = Location(4, "stanley_parke", QueueList(), CourtList(11))
locations = {
    1: queenElizabeth, 
    2: stanleyPark1,
    3: stanleyPark2,
    4: kitslano
}

# Store QueueList and CourtList in Redis
for location in locations:
    # Store QueueList
    queue_list_key = f"queue_list:{location.id}"
    queue_list = QueueList()
    redis_conn.set(queue_list_key, json.dumps(queue_list.to_dict()))

    # Store CourtList
    court_list_key = f"court_list:{location.id}"
    court_list = CourtList(16)  # Assuming 16 courts for each location
    redis_conn.set(court_list_key, json.dumps(court_list.to_dict()))

# Store Location data in Redis
for location in locations:
    location_key = f"location:{location.id}"
    redis_conn.set(location_key, json.dumps(location.to_dict()))

print("Locations data, QueueLists, and CourtLists stored in Redis.")