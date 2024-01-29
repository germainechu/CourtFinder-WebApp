from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from sqlalchemy import ForeignKey
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Location(db.Model):
    location_id = db.Column(db.INTEGER, primary_key=True)
    location_name = db.Column(db.String(200), nullable=False)

class Court(db.Model):
    court_id = db.Column(db.INTEGER, primary_key=True)
    location_id = db.Column(db.INTEGER, ForeignKey(Location.location_id), nullable=False)
    total_waiting_time = db.Column(db.INTEGER)

class Queue_item(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.now())

def initialize_database():
    with app.app_context():
        db.create_all()
