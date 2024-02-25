from routes.user_view import user_view
from database import app, initialize_database

# Register blueprints
app.register_blueprint(user_view)

# Initialize the database
initialize_database()

if __name__ == "__main__":
    app.run(port=5000, debug=True)
    