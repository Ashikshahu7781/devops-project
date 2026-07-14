from flask import Blueprint, jsonify

from app.services.tournament_statistics_service import (
    TournamentStatisticsService,
)

statistics_bp = Blueprint(
    "statistics",
    __name__,
    url_prefix="/api/statistics",
)


@statistics_bp.route(
    "/<int:tournament_id>",
    methods=["GET"],
)
def tournament_statistics(tournament_id):

    data = TournamentStatisticsService.get_statistics(
        tournament_id
    )

    return jsonify({
        "success": True,
        "data": data,
    }), 200