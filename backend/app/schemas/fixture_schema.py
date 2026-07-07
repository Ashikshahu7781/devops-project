from marshmallow import Schema, fields


class TeamSummarySchema(Schema):
    id = fields.Integer()
    name = fields.String()


class FixtureSchema(Schema):

    id = fields.Integer(dump_only=True)

    tournament_id = fields.Integer()

    round = fields.Integer()

    home_team = fields.Nested(
        TeamSummarySchema
    )

    away_team = fields.Nested(
        TeamSummarySchema
    )

    home_score = fields.Integer()

    away_score = fields.Integer()

    status = fields.String()

    match_date = fields.DateTime(
        allow_none=True
    )

    created_at = fields.DateTime()