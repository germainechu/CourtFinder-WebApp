from flask import request, jsonify, Blueprint
from models import locations
# Flask blueprint for court-related endpoints 
courts = Blueprint('courts', __name__) 
# Endpoint for courts
@courts.route('/<int:location_id>', methods=['GET'])
def get_courts(location_id): # Use location_id directly from the route parameter
    #TODO: remind the client side to pass a locationID as the params to the get requets. 
    try:
        print(location_id)
        #location = locations.[location_id]
        location = locations[1]
        if location.courList.head == None:
            return  jsonify({'status': 'success', 'messafe': 'there is no court in this location'}), 200
        else:
            return jsonify({'status': 'success', 'headCourt': location.courList.head.id}), 200
    except Exception as e:
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue retrieving the courts'}), 500

#TODO: send notification when a court is available 
