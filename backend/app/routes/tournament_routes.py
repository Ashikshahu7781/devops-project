from flask import Blueprint, jsonify, request

from marshmallow import ValidationError
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
)

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
@jwt_required()
def get_tournaments():

    user_id = int(get_jwt_identity())

    tournaments = TournamentService.get_all(user_id)

    return jsonify({
        "success": True,
        "data": tournaments_schema.dump(tournaments),
    }), 200


@tournament_bp.route("", methods=["POST"])
@jwt_required()
def create_tournament():

    try:
        data = tournament_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    user_id = int(get_jwt_identity())

    tournament = TournamentService.create(
        data,
        user_id,
    )

    return jsonify({
        "success": True,
        "message": "Tournament created successfully",
        "data": tournament_schema.dump(tournament),
    }), 201


@tournament_bp.route("/<int:tournament_id>", methods=["GET"])
@jwt_required()
def get_tournament(tournament_id):

    user_id = int(get_jwt_identity())

    tournament = TournamentService.get_by_id(
        tournament_id,
        user_id,
    )

    if not tournament:
        return jsonify({
            "success": False,
            "message": "Tournament not found",
        }), 404

    return jsonify({
        "success": True,
        "data": tournament_schema.dump(tournament),
    }), 200


@tournament_bp.route("/<int:tournament_id>", methods=["PUT"])
@jwt_required()
def update_tournament(tournament_id):

    try:
        data = tournament_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    user_id = int(get_jwt_identity())

    tournament = TournamentService.update(
        tournament_id,
        data,
        user_id,
    )

    if not tournament:
        return jsonify({
            "success": False,
            "message": "Tournament not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Tournament updated successfully",
        "data": tournament_schema.dump(tournament),
    }), 200


@tournament_bp.route("/<int:tournament_id>", methods=["DELETE"])
@jwt_required()
def delete_tournament(tournament_id):

    user_id = int(get_jwt_identity())

    deleted = TournamentService.delete(
        tournament_id,
        user_id,
    )

    if not deleted:
        return jsonify({
            "success": False,
            "message": "Tournament not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Tournament deleted successfully",
    }), 200