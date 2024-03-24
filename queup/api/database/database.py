from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from models import db, LocationModel, QueueListModel, UserModel

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app

# Initialize database
app = create_app()

# Create a new location and queue list instance
new_location = LocationModel(name='QE')
new_queue_list = QueueListModel(location=new_location)  # Assuming a relationship exists between LocationModel and QueueListModel

# Add the instances to the SQLAlchemy session
db.session.add(new_location)
db.session.add(new_queue_list)

# Create database tables
with app.app_context():
    db.create_all()
