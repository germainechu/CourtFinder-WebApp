from .Court import Court
class CourtList:
    def __init__(self, court_num):
        self.head = None
        self.tail = None
        for i in range(court_num):
            self.add_court(i)

    def add_court(self, id):
        new_court = Court(id)
        if not self.head:  # If the list is empty
            self.head = new_court
            self.tail = new_court
        else:
            self.tail.next = new_court  # Append new court at the end
            self.tail = new_court

    def remove_court(self, id):
        current = self.head
        previous = None
        while current:
            if current.id == id:
                if previous:
                    previous.next = current.next
                else:
                    self.head = current.next  # Removed head
                if current == self.tail:
                    self.tail = previous  # Updated tail if needed
                return current
            previous = current
            current = current.next
        return None  # Court not found

    def find_court(self, id):
        current = self.head
        while current:
            if current.id == id:
                return current
            current = current.next
        return None  # Court not found
        
    def pop_head(self):
        if not self.head:
            return None  # Empty list
        removed_court = self.head
        self.head = self.head.next  # Move head to the next court
        if self.head is None:  # If the list had only one court
            self.tail = None  # List is now empty
        return removed_court

    def move_head_to_tail(self):
        court = self.pop_head()
        if court:
            court.next = None  # Disconnect the popped court from the list
            if self.tail:
                self.tail.next = court
                self.tail = court
            else:  # If the list was empty
                self.head = self.tail = court
