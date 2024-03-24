from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class LocationModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    queue_list = db.relationship('QueueListModel', backref='location', lazy=True)
    court_list = db.relationship('CourtListModel', backref='location', lazy=True)

class QueueListModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    location_id = db.Column(db.Integer, db.ForeignKey('location_model.id'), nullable=False)
    users = db.relationship('UserModel', backref='queue_list', lazy=True)

class UserModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    player_num = db.Column(db.Integer, nullable=False)
    queue_list_id = db.Column(db.Integer, db.ForeignKey('queue_list_model.id'), nullable=False)
