from flask_restful import Resource

items = {
    1: {
        "name": "My item",
        "status": 0,
    },
    2: {
        "name": "My second item",
        "status": 1,
    },
}


class Item(Resource):
    def get(self):
        """GET request returns all items."""
        return {"items": items}
