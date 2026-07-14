from flask import Blueprint, jsonify

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
)

from app.services.dashboard_service import DashboardService

dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix="/api/dashboard",
)


@dashboard_bp.route("", methods=["GET"])
@jwt_required()
def dashboard():

    user_id = int(get_jwt_identity())

    return jsonify({
        "success": True,
        "data": DashboardService.get_dashboard(
            user_id
        )
    }), 200