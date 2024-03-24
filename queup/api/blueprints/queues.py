from flask import request, jsonify, Blueprint
from models import locations, User

queues = Blueprint('queues', __name__)

# Endpoint for queues
@queues.route('/<int:location_id>', methods=['GET'])
def get_queue(location_id):
    try:
        location= locations[location_id]
        if len(location.queueList.users) == 0:
            return  jsonify({'status': 'success', 'messafe': 'there is no one in the queue'}), 200
        else:
            queue_items = [user.to_dict() for user in location.queueList.users]
            return jsonify({'status': 'success', 'queue': queue_items}), 200
    except Exception as e:
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue retrieving the queue'}), 500
    

@queues.route('/<int:location_id>', methods=['POST'])
def post_queue(location_id):
    try: 
        queue_item = request.json
        username = queue_item['username']
        player_num = queue_item['playerNum']
        new_user = User(username, player_num)  
        # add curr user to the queue
        location = locations[location_id]
        location.queueList.addUser(new_user)
        # parse user data as dict
        queue_data = [user.to_dict() for user in location.queueList.users]
        # get the soonest available court
        court =  location.courList.head
        # send queue data and cour in response
        return jsonify({'status': 'success', 'queue': queue_data, 'soonest_available_court': court.id}), 200
    except Exception as e:
        # Print the exception to see what went wrong
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue adding you to the queue'}), 500

#deleted the user in the queue 
@queues.route('/<int:location_id>/<int:user_id>', methods=['DELETE'])
def delete_queue(location_id, user_id):
    try:
        # Get the location from the locations dictionary based on location_id
        location = locations.get(location_id)
        print(location_id)
        print(user_id)
        # Check if the location exists
        if location is None:
            return jsonify({'status': 'error', 'message': 'Location not found'}), 404

        # Find and remove the user from the queue list based on user_id
        removed_user = None
        for user in  location.queueList.users:
            if user.id == user_id:
                location.queueList.users.remove(user)
                removed_user = user
                break
        
        if removed_user is not None:
            return jsonify({'status': 'success', 'message': 'User removed from queue', 'removed_user': removed_user.to_dict()}), 200
        else:
            return jsonify({'status': 'error', 'message': 'User not found in the queue'}), 404

    except Exception as e:
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue deleting the user from the queue'}), 500