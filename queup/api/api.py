from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Define a route to serve the index.html file
@app.route('/')
def serve_index():
    return send_from_directory(os.path.join('build'), 'index.html')

# Define a route to serve files from the asset directory
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