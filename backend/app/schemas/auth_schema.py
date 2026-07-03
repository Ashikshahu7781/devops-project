from marshmallow import Schema, fields, validate


class RegisterSchema(Schema):
    full_name = fields.String(
        required=True,
        validate=validate.Length(min=2, max=120),
    )

    email = fields.Email(required=True)

    password = fields.String(
        required=True,
        validate=validate.Length(min=6),
    )