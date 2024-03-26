from flask import Flask, send_from_directory, jsonify, request
from blueprints.courts import courts as courts_blueprint
from blueprints.queues import queues as queues_blueprint
from flask_cors import CORS
import os
import redis

# Connect to Redis
redis_host = 'localhost'  # Update with your Redis host
redis_port = 6379         # Default Redis port
redis_db = 0              # Redis database index
redis_conn = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db)


app = Flask(__name__)
# TODO: LOCALHOST to be replaced with http://queup.ca
CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Register blueprints
# In api.py
app.register_blueprint(courts_blueprint, url_prefix='/api/courts')
app.register_blueprint(queues_blueprint, url_prefix='/api/queues')

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

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)