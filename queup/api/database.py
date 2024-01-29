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
    location_id = db.Column(db.INTEGER, primary_key=True)
    location_name = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    court_count = db.Column(db.INTEGER)

class Court(db.Model):
    court_id = db.Column(db.INTEGER, primary_key=True)
    location_id = db.Column(db.INTEGER, ForeignKey(Location.location_id), nullable=False)
    total_waiting_time = db.Column(db.INTEGER)

class Queue_item(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.now())

def load_locations_from_csv(data_path):
    with open(data_path, 'r') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            location = Location(location_name=row['court-name'], address=row['court-address'], court_count=int(row["court-count"]))
            try:
                db.session.add(location)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                # Handle integrity errors (e.g., duplicate entries) if needed

def initialize_database():
    with app.app_context():
        db.create_all()
        # load the current tennis court locations
        data_path = "../data/tennisCourtdata.csv"
        load_locations_from_csv(data_path)
