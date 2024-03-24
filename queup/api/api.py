from flask import Flask, send_from_directory, jsonify, request
from blueprints.courts import courts as courts_blueprint
from blueprints.queues import queues as queues_blueprint
import os
app = Flask(__name__)
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