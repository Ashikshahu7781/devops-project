from flask import Blueprint, jsonify, request

from marshmallow import ValidationError

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
)
from app.schemas.user_schema import UserSchema

from app.schemas.account_schema import (
    UpdateProfileSchema,
    ChangePasswordSchema,
)

from app.services.account_service import (
    AccountService,
)

account_bp = Blueprint(
    "account",
    __name__,
    url_prefix="/api/account",
)

profile_schema = UpdateProfileSchema()
password_schema = ChangePasswordSchema()
user_schema = UserSchema()

@account_bp.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():

    user = AccountService.get_profile(
        int(get_jwt_identity())
    )

    return jsonify({

        "success": True,

        "data": user_schema.dump(user),

    }), 200


@account_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():

    try:

        data = profile_schema.load(
            request.get_json()
        )

    except ValidationError as err:

        return jsonify({

            "success": False,

            "errors": err.messages,

        }), 400

    user, error = AccountService.update_profile(
        int(get_jwt_identity()),
        data,
    )

    if error:

        return jsonify({

            "success": False,

            "message": error,

        }), 400

    return jsonify({

        "success": True,

        "message": "Profile updated successfully",

        "data": user_schema.dump(user)

    }), 200


@account_bp.route("/password", methods=["PUT"])
@jwt_required()
def change_password():

    try:

        data = password_schema.load(
            request.get_json()
        )

    except ValidationError as err:

        return jsonify({

            "success": False,

            "errors": err.messages,

        }), 400

    error = AccountService.change_password(
        int(get_jwt_identity()),
        data,
    )

    if error:

        return jsonify({

            "success": False,

            "message": error,

        }), 400

    return jsonify({

        "success": True,

        "message": "Password updated successfully",

    }), 200