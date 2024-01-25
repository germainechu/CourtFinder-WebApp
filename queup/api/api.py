from flask import Flask, render_template, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from datetime import datetime
import json

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

class Queue_item(db.Model):
    queue_id = db.Column(db.INTEGER, primary_key=True, autoincrement=True) # the id should be auto generate
    # name = db.Column(db.String, nullable=False)
    court_id = db.Column(db.INTEGER, ForeignKey(Court.court_id), nullable=False)
    time_joined = db.Column(db.DateTime, default=datetime.now()) # time auto setup when entry created


# route to get all courts in a location with location_id
@app.route('/')
def current_queues():
    if  request.method == 'GET': 
        try:
            queue_items = Queue_item.query.order_by(Queue_item.time_joined).all()

            queue_items_dic = {}
            for item in queue_items:
                queue_items_dic[item.queue_id] = {'court_id': item.court_id, 'time_joined': item.time_joined.strftime('%Y-%m-%d %H:%M:%S')}

            response_data = {
                'status': "success",
                'data': queue_items_dic
            }
            return jsonify(response_data), 200
        
        except Exception as e:
            # Print the exception to see what went wrong
            print(e)
            return 'There was an issue fetching current queue_items data', 500
    else:
        return 'hello world'
    

@app.route('/add', methods = ["GET", "POST"])
def join_the_queue():
    if request.method == 'POST':  # write a new queue_item to the db
        request_data = request.get_json()
        name = request_data.get('name')
        court_id = request_data.get('court_id')
        new_queue_item = Queue_item(name= name, court_id=court_id) # create a new queue_item instance

        try:
            db.session.add(new_queue_item) # write the newly created instance to db
            db.session.commit()
            response_data = {
                'status': 'success',
                'message': 'new queue_item added',
            }
            return jsonify(response_data), 200
        
        except Exception as e:
            print(e)
            return 'There was an issue adding you to the queue', 500
    else: 
        return "hello world"
    

'''
@app.route('/delete/<int:queue_id>')
def delete(queue_id):
    to_delete = Queue_item.query.get_or_404(queue_id)

    try:
        db.session.delete(to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was an issue when removing this data entry'
'''

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(port = 5000, debug=True)