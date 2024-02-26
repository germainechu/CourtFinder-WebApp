from flask import request, jsonify, Blueprint
from database import db, Location, Court, Queue_item

user_view = Blueprint('home_page', __name__)
# get all locations 
@user_view.route('/locations', methods=['GET'])
def get_all_locations():
    if request.method == 'GET':
        try:
            locations = Location.query.order_by(Location.location_id).all()
            data = []
            for loc in locations:
                data.append({
                    "location_id": loc.location_id,
                    "location_name": loc.location_name,
                    "address": loc.address,
                    "court_count": loc.court_count
                })
            response_data = {
                'status': "success",
                'data': data
            }
            return jsonify(response_data), 200
            
        except Exception as e:
            # Print the exception to see what went wrong
            print(e)
            return jsonify({'status': 'error', 'message': 'There was an issue fetching current locations data'}), 500
    else:
        return jsonify({'status': 'error', 'message': 'Invalid request method'}), 400
# get all courts with location id
@user_view.route('/<int:location_id>', methods = ["GET", "POST"])
def get_courts_in_location(location_id):
    if request.method == "GET":
        try:
            curr_courts = db.session.query(Court).filter(Court.location_id == location_id)
            data = []
            for curr_court in curr_courts:
                data.append ({
                    "court_id": curr_court.court_id,
                    "total_waiting_time" : curr_court.total_waiting_time
                })
                
            return jsonify({'status': "success", "data": data}), 200
        except:
            return jsonify({'status': 'error', 'message': 'There was an issue fetching current locations data'}), 500
    else:
        return jsonify({'status': 'error', 'message': 'Invalid request method'}), 400
    
@user_view.route('/queue', methods=['GET', 'POST'])
def handle_queue():
    # get all current queue items
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
            return jsonify({'status': 'error', 'message': 'There was an issue fetching current queue_items data'}), 500

    # add a new user to a queue given username and court selected (court_id)
    if request.method == 'POST':  # write a new queue_item to the db
        request_data = request.get_json()
        name = request_data.get('name')
        court_id = request_data.get('court_id') 
        new_queue_item = Queue_item(name=name, court_id=court_id) # create a new queue_item instance

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
            return jsonify({'status': 'error', 'Message': 'There was an issue adding you to the queue, please try again'}), 500
    else: 
        return jsonify({'status': 'error', 'message': 'Invalid request method'}), 400