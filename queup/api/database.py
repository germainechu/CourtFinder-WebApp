from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from sqlalchemy import ForeignKey
from sqlalchemy.exc import IntegrityError
from datetime import datetime
import csv 


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Location(db.Model):
    location_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    location_name = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    court_count = db.Column(db.INTEGER)

class Court(db.Model):
    court_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    location_id = db.Column(db.INTEGER, ForeignKey(Location.location_id), nullable=False)
    ## default is -1, will call api that fetches all queue_items in the queue_items table and count the total waiting time 
    total_waiting_time = db.Column(db.INTEGER, default=-1) 

class Queue_item(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.now())

def load_locations_from_csv(data_path):
    # Set the initial location_id, to be different from the court_id
    current_location_id = 1000

    with open(data_path, 'r') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            location = Location(location_id=current_location_id,location_name=row['court-name'], address=row['court-address'], court_count=int(row["court-count"]))
            current_location_id += 1
            try:
                db.session.add(location)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                # Handle integrity errors (e.g., duplicate entries) if needed

## generate rows in the Court table base on the number of court-count in location table
def initialize_court():
    locations = Location.query.all()
    
    for location in locations:
        court_count = location.court_count
        for _ in range(court_count):
            court = Court(location_id=location.location_id)
            
            try:
                db.session.add(court)
                db.session.commit()
            except IntegrityError as e:
                db.session.rollback()
                print(f"Error adding court: {e}")
                
def initialize_database():
    with app.app_context():
        # Drop tables if they exist
        # db.reflect()
        # db.drop_all()
        
        db.create_all()
        # load the current tennis court locations
        data_path = "../data/tennisCourtdata.csv"
        load_locations_from_csv(data_path)

        initialize_court()
        
