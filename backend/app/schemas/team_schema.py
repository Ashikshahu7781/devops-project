from marshmallow import Schema, fields


class TeamSchema(Schema):
    id = fields.Integer(dump_only=True)

    tournament_id = fields.Integer(required=True)

    name = fields.String(required=True)

    coach = fields.String(required=True)

    captain = fields.String(required=True)

    contact_email = fields.Email(required=True)

    contact_phone = fields.String(required=True)

    logo = fields.String(allow_none=True)

    created_at = fields.DateTime(dump_only=True)