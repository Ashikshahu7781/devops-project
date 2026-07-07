from flask import Blueprint, jsonify, request

from app.schemas.fixture_schema import FixtureSchema
from app.services.fixture_service import FixtureService

fixture_bp = Blueprint(
    "fixtures",
    __name__,
    url_prefix="/api/fixtures",
)

fixtures_schema = FixtureSchema(many=True)


@fixture_bp.route("", methods=["GET"])
def get_fixtures():

    tournament_id = request.args.get(
        "tournament_id",
        type=int,
    )

    fixtures = FixtureService.get_all(
        tournament_id
    )

    return jsonify({
        "success": True,
        "data": fixtures_schema.dump(fixtures),
    }),200
    
@fixture_bp.route(
    "/generate/<int:tournament_id>",
    methods=["POST"],
)
def generate_fixtures(tournament_id):

    success = FixtureService.generate(
        tournament_id
    )

    if not success:

        return jsonify({
            "success": False,
            "message": "At least two teams are required.",
        }), 400

    return jsonify({
        "success": True,
        "message": "Fixtures generated successfully.",
    }), 201
    
@fixture_bp.route(
    "/<int:fixture_id>/score",
    methods=["PUT"],
)
def update_score(fixture_id):

    data = request.get_json()

    home_score = data.get("home_score")
    away_score = data.get("away_score")

    fixture = FixtureService.update_score(
        fixture_id,
        home_score,
        away_score,
    )

    if not fixture:

        return jsonify({
            "success": False,
            "message": "Fixture not found",
        }), 404

    return jsonify({
        "success": True,
        "message": "Score updated successfully",
        "data": FixtureSchema().dump(fixture),
    }), 200