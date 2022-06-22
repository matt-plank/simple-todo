from flask import Flask
from flask_restful import Api

from routes.item import Item


def create_app() -> Flask:
    """Initialise the app with all the required routes."""

    # Create the app
    app = Flask(__name__)
    api = Api(app)

    # Add resources to app
    api.add_resource(Item, "/item")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=8080)
