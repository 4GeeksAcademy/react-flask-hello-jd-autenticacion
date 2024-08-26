"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.exceptions import BadRequest

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    request_body = request.get_json()
    if request_body is None:
        return jsonify({"msg": "Missing JSON in request"}), 400
    if "email" not in request_body:
        return jsonify({"msg": "Missing email parameter"}), 400
    if "password" not in request_body:
        return jsonify({"msg": "Missing password parameter"}), 400
    
    user = User()
    user.create_user(request_body["email"], request_body["password"])
    return jsonify(user.serialize()), 200

@api.route('/login', methods=['POST'])
def login():
    request_body = request.get_json()
    if request_body is None:
        return jsonify({"msg": "Missing JSON in request"}), 400
    if "email" not in request_body:
        return jsonify({"msg": "Missing email parameter"}), 400
    if "password" not in request_body:
        return jsonify({"msg": "Missing password parameter"}), 400
    
    user = User.query.filter_by(email=request_body["email"]).first()
     
    if user and user.check_password(request_body["password"]) is True:
        access_token = create_access_token(identity=user.serialize())

        return jsonify({"msg": "User logged in", "user": user.serialize(), "access_token": access_token}), 200
    else:
        return jsonify({"msg": "Incorrect email or password"}), 401
  

# @api.route("/admin/rehash_passwords", methods=["POST"])
# def rehash_passwords():
#     users = User.query.all()
#     for user in users:
#         # Asume que tienes una contraseña predeterminada o una forma de obtener la contraseña original
#         user.set_password("contraseña_predeterminada")
#     db.session.commit()
#     return jsonify({"msg": "Contraseñas regeneradas"}), 200
   
  
 