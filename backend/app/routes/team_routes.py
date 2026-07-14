from flask import Blueprint, jsonify, request
from marshmallow import ValidationError
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
)

from app.schemas.team_schema import TeamSchema
from app.services.team_service import TeamService

team_bp = Blueprint(
    "teams",
    __name__,
    url_prefix="/api/teams",
)

team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)


@team_bp.route("", methods=["GET"])
@jwt_required()
def get_teams():

    user_id = int(get_jwt_identity())

    tournament_id = request.args.get(
        "tournament_id",
        type=int,
    )

    teams = TeamService.get_all(
        tournament_id,
        user_id,
    )

    return jsonify({
        "success": True,
        "data": teams_schema.dump(teams),
    }), 200


@team_bp.route("", methods=["POST"])
@jwt_required()
def create_team():

    try:
        data = team_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    user_id = int(get_jwt_identity())

    team = TeamService.create(
        data,
        user_id,
    )

    if not team:
        return jsonify({
            "success": False,
            "message": "Tournament not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Team created successfully",
        "data": team_schema.dump(team),
    }), 201


@team_bp.route("/<int:team_id>", methods=["PUT"])
@jwt_required()
def update_team(team_id):

    try:
        data = team_schema.load(request.get_json())

    except ValidationError as err:
        return jsonify({
            "success": False,
            "errors": err.messages,
        }), 400

    user_id = int(get_jwt_identity())

    team = TeamService.update(
        team_id,
        data,
        user_id,
    )

    if not team:
        return jsonify({
            "success": False,
            "message": "Team not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Team updated successfully",
        "data": team_schema.dump(team),
    }), 200


@team_bp.route("/<int:team_id>", methods=["DELETE"])
@jwt_required()
def delete_team(team_id):

    user_id = int(get_jwt_identity())

    deleted = TeamService.delete(
        team_id,
        user_id,
    )

    if not deleted:
        return jsonify({
            "success": False,
            "message": "Team not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Team deleted successfully",
    }), 200