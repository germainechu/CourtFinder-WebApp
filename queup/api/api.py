from routes.user_view import user_view
from database import app, initialize_database
from flask import Flask, send_from_directory

# Register blueprints
app.register_blueprint(user_view)

# Initialize the database
initialize_database()
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
    