from flask import Blueprint, jsonify

from app.services.standing_service import StandingService

standing_bp = Blueprint(
    "standings",
    __name__,
    url_prefix="/api/standings",
)


@standing_bp.route("/<int:tournament_id>", methods=["GET"])
def get_standings(tournament_id):

    standings = StandingService.get_standings(
        tournament_id
    )

    return jsonify({
        "success": True,
        "data": standings,
    }), 200