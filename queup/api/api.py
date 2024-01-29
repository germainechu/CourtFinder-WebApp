from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from datetime import datetime
from routes.user_view import user_view

# set up the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

# initialize SQLAlchemy by creating a db object
db = SQLAlchemy(app)

# declarative mapping: 
class Location(db.Model):
    location_id = db.Column(db.INTEGER, primary_key = True)
    location_name = db.Column(db.String(200), nullable=False)

class Court(db.Model):
    court_id = db.Column(db.INTEGER, primary_key = True)
    location_id = db.Column(db.INTEGER, ForeignKey(Location.location_id), nullable = False)
    total_waiting_time = db.Column(db.INTEGER)

class Queue_item(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True) # the id should be auto generate
    # name = db.Column(db.String, nullable=False)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.now()) # time auto setup when entry created

# registering blueprints
app.register_blueprint(user_view)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(port = 5000, debug=True)