from Court import Court
head = None
tail = None
# construct a court list based on the court_nums in current location
queueList = ["user1", "user2", "user3", "user4", "user5"]
# target is a req sent by the client
def updateCourtList(head, tail, target):
    if (head != None):
        prev = head
        curr = head
        while(curr != None):
            if (curr.id == target):
                curr.occupied_by = None
                break; # soonest available court
            else:
                prev = curr
                curr = curr.next
    #found the court that just got empty
    if !queueList.empty():
        # assign the first user in queuelist to curr court and move curr court to the end of the linkedlist
        assignCourt(curr)
        #move curr court to the end of linkedlist once court has been assigned
        return;
    elif (prev != curr): #where queueList IS empty, and curr is not the first element in linkedlist
      # move the new available court to the front of the linkedlist
          prev.next= curr.next
          oldFirst = head
          head = curr
          curr.next = oldFirst
    else: # curr is at the head of the linkedlist
      return;

# a process to always check for court assignment
def assignCourt(curr):
  while(!queueList.empty()): 
      # find soonest available court 
      # get First of CourtList
      courtToAssign = curr
      currUser = queueList.pop()
      curr.occupied_by = currUser
      
      moveCurrToEnd(curr)
      return courtToAssign #


def moveCurrToEnd(node):
  second = node.next
  tail = node;
  node = second;

# case 1: all courts are occupied and queueList is not empty
assignCourt(head)
# case 2: one court got empty ahead of time
updateCourtList(head, tail)
