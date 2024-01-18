from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from datetime import datetime

## set up the app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

db = SQLAlchemy(app)

class Location(db.Model):
    location_id = db.Column(db.INTEGER, primary_key = True)
    location_name = db.Column(db.String(200), nullable=False)
    
    def __init__(self, location_id, location_name):
        self.location_id = location_id
        self.location_name = location_name

class Court(db.Model):
    court_id = db.Column(db.INTEGER, primary_key = True)
    location_id = db.Column(db.INTEGER, ForeignKey(Location.location_id), nullable = False)
    total_waiting_time = db.Column(db.INTEGER)
    
    def __init__(self, court_id, total_waiting_time, location_id):
        self.court_id = court_id
        self.total_waiting_time = total_waiting_time
        location_id = location_id

class Queue_items(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.utcnow) # time auto setup when entry created

    def __init__(self, queue_id, court_id, time_joined):
        self.queue_id = queue_id
        self.court_id = court_id
        self.time_joined = time_joined

# route to get all courts in a location with location_id
@app.route('/')
def index():
    return render_template('index.html')
    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)

    