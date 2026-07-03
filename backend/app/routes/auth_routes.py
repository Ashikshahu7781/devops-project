from flask import Blueprint, request, jsonify
from marshmallow import ValidationError

from app.schemas.auth_schema import RegisterSchema
from app.services.auth_service import AuthService
from app.schemas.auth_schema import RegisterSchema, LoginSchema

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth",
)

register_schema = RegisterSchema()
login_schema = LoginSchema()

@auth_bp.route("/register", methods=["POST"])
def register():

    try:
        data = register_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    user, error = AuthService.register(data)

    if error:
        return jsonify({
            "success": False,
            "message": error,
        }), 400

    return jsonify({
        "success": True,
        "message": "User registered successfully",
        "data": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "role": user.role,
        },
    }), 201
    
@auth_bp.route("/login", methods=["POST"])
def login():

    try:
        data = login_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    result, error = AuthService.login(data)

    if error:
        return jsonify({
            "success": False,
            "message": error,
        }), 401

    return jsonify({
        "success": True,
        "message": "Login successful",
        "data": result,
    }), 200