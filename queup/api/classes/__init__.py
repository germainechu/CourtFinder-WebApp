from .User import User
from .Court import Court
from .CourtList import CourtList
from .QueueList import QueueList
from .Location import Location

queenElizabeth = Location(1, "queen_elizabeth", QueueList(), CourtList(16))
stanleyPark1 = Location(2, "stanley_park1", QueueList(), CourtList(12))
stanleyPark2 = Location(3, "stanley_park2", QueueList(), CourtList(6))
kitslano = Location(4, "stanley_parke", QueueList(), CourtList(11))
# make unique ids
locations = {
    1: queenElizabeth, 
    2: stanleyPark1,
    3: stanleyPark2,
    4: kitslano
}