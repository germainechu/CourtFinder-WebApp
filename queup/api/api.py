from routes.user_view import user_view
from flask import Flask, send_from_directory, jsonify, request
import os
from models.User import User
from models.Court import Court
import json

app = Flask(__name__)
# Register blueprints
# app.register_blueprint(user_view)

# server index.html for the root route and root routes with params 
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_index(path):
    print(path)
    return send_from_directory('build', 'index.html')

# serve the assets
@app.route('/assets/<path:path>')
def serve_asset(path):
    return send_from_directory(os.path.join('build', 'assets'), path)

# serve js files
@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(os.path.join('build', 'static', 'js'), filename)

# serve css files
@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory(os.path.join('build', 'static', 'css'), filename)

# data 
head = None
courtList = None
queues =[] # list of Users

# api 
# @app.route('/api/courts', methods=['GET'])
# def get_courts():
#     try:
#         response_data = {
#             'status': "success",
#             'data': courtList
#         }
#         return jsonify(response_data), 200
        
#     except Exception as e:
#         # Print the exception to see what went wrong
#         print(e)
#         return jsonify({'status': 'error', 'message': 'There was an issue fetching court data'}), 500

@app.route('/api/queues', methods=['POST'])
def post_queue():
    try: 
        queue_item = request.json
        new_user = User(queue_item["username"], queue_item["playerNum"])
        queues.append(new_user)
        #TODO: return the soonest available court
        return jsonify({'status': 'success', 'current_queues':  len(queues)}), 200
    except Exception as e:
        # Print the exception to see what went wrong
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue adding you to the queue'}), 500
    

#TODO: send notification when a court is available 
#TODO: deleted the user in the queue 
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)