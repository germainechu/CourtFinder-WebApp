from routes.user_view import user_view
from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)
# Register blueprints
# app.register_blueprint(user_view)

# Define a route to serve the index.html file
@app.route('/')
def serve_index():
    return send_from_directory(os.path.join('..', 'build'), 'index.html')

# Define a route to serve files from the asset directory
@app.route('/assets/<path:path>')
def serve_asset(path):
    return send_from_directory(os.path.join('..', 'build', 'assets'), path)

# serve js files
@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(os.path.join('..', 'build', 'static', 'js'), filename)
# serve css files
@app.route('/static/css/<path:filename>')
def serve_css(filename):
    return send_from_directory(os.path.join('..', 'build', 'static', 'css'), filename)

courtList = [{"id": 1, "occupied_by": "Celine", "duration": 60 },
  { "id": 2, "occupied_by": "Celine", "duration": 30 }]

@app.route('/queue/<username>/<int:playerCount>', methods=['GET'])
def get_courts():
    try:
        response_data = {
            'status': "success",
            'data': courtList
        }
        return jsonify(response_data)
        
    except Exception as e:
        # Print the exception to see what went wrong
        print(e)
        return jsonify({'status': 'error', 'message': 'There was an issue fetching current locations data'}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)