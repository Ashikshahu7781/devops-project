from marshmallow import Schema, fields


class TournamentSchema(Schema):
    id = fields.Integer(dump_only=True)

    name = fields.String(required=True)

    description = fields.String()

    sport = fields.String(required=True)

    venue = fields.String(required=True)

    start_date = fields.Date(required=True)

    end_date = fields.Date(required=True)

    max_teams = fields.Integer(required=True)

    status = fields.String()