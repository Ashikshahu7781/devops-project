from flask import Blueprint, request, jsonify
from marshmallow import ValidationError

from app.schemas.auth_schema import RegisterSchema
from app.services.auth_service import AuthService

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth",
)

register_schema = RegisterSchema()


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