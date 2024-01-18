class Location:
    def __init__(self, name: str, address: Optional[str] = None):
        self.name = name
        self.address = address
        self.courts = []  # List to hold Court instances