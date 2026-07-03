from flask import Blueprint, jsonify
from flask import request

from marshmallow import ValidationError
from app.models.tournament import Tournament
from app.schemas.tournament_schema import TournamentSchema
from app.services.tournament_service import TournamentService

tournament_bp = Blueprint(
    "tournaments",
    __name__,
    url_prefix="/api/tournaments",
)

tournament_schema = TournamentSchema()
tournaments_schema = TournamentSchema(many=True)


@tournament_bp.route("", methods=["GET"])
def get_tournaments():

    tournaments = TournamentService.get_all()

    return jsonify({
        "success": True,
        "data": tournaments_schema.dump(tournaments),
    }), 200
    
@tournament_bp.route("", methods=["POST"])
def create_tournament():

    try:
        data = tournament_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    tournament = TournamentService.create(data)

    return jsonify({
        "success": True,
        "message": "Tournament created successfully",
        "data": tournament_schema.dump(tournament),
    }), 201