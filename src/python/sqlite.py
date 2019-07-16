from flask import Blueprint, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from flask_app import app

db = SQLAlchemy(app)
ma = Marshmallow(app)

sqlite_flask = Blueprint('sqlite_flask', __name__)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    address = db.Column(db.String(120))
    user_id = db.Column(db.String(120), unique=True)
    current_id = 0

    def __init__(self, username, email, address):
        self.username = username
        self.email = email
        self.address = address
        User.current_id += 1
        self.user_id = username + "#" +  str(User.current_id)

class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id' ,'username', 'email', 'address', 'user_id')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

# endpoint to create new user
@sqlite_flask.route("/user", methods=["POST"])
def add_user():
    username = request.json['username']
    email = request.json['email']
    address = request.json['address']

    new_user = User(username, email, address)
    User.active_ids = new_user.id
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.username, new_user.email, new_user.address)

# endpoint to show all users
@sqlite_flask.route("/user", methods=["GET"])
def get_user():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result.data)

# endpoint to get the db ids for all users
def get_user_ids():
    return User.active_ids

# endpoint to get user detail by id
@sqlite_flask.route("/user/<id>", methods=["GET"])
def user_detail(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)

# endpoint to update user
@sqlite_flask.route("/user/<id>", methods=["PUT"])
def user_update(id):
    user = User.query.get(id)
    username = request.json['username']
    email = request.json['email']
    address = request.json['address']

    user.email = email
    user.username = username
    user.address = address

    db.session.commit()
    return user_schema.jsonify(user)

# endpoint to delete user
@sqlite_flask.route("/user/<id>", methods=["DELETE"])
def user_delete(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)