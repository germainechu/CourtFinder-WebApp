from Court import Court
class CourtList:
    def __init__(self, court_num):
        self.head = Court(None) # two dummy node for the head and tail
        self.tail = Court(None)
        self.head.next = self.tail
        self.tail.next = None
        id = 0
        curr  = self.head
        # construct a court list with a cour_num input
        while(id < court_num):
            self.head.next = Court(id)
            id = id + 1
        self.tail = curr
    # return the node to be removed
    def remove(self, node_id):
        curr = self.head
        prev = curr

        while (curr!= None):
            if curr.id == node_id and self.tail == self.haed: # only one node in the list
                self.head.next = self.tail
                return curr
            elif (curr.id == node_id and curr == None): # node to remove is at tail
                prev.next = None
                self.tail = prev
                prev.next = curr.next
                return curr
            elif curr.id == node_id and self.head == curr: # node to remove is at head
                self.head.next = curr.next
                return curr
            curr = curr.next
            prev = prev.next
        raise Exception("Court not found")

    def moveToHead(self, node):
        node.next = self.head.next
        self.head.next = node
    
    def moveToTail(self, node):
        oldTail = self.tail
        oldTail.next = node
        node.next = None
        self.tail = node

    def moveNodeToFront(self, node_num):
        node = self.remove(self, node_num)
        self.moveToHead(self, node)

    def moveNodeToEnd(self, node_num):
        node = self.remove(self, node_num)
        self.moveNodeToEnd(self, node)

# test the class
courlist = CourtList(16)
print(courlist.head.occupied)