from marshmallow import Schema, fields, validate


class UpdateProfileSchema(Schema):

    full_name = fields.Str(
        required=True,
        validate=validate.Length(min=3),
    )

    email = fields.Email(
        required=True,
    )


class ChangePasswordSchema(Schema):

    current_password = fields.Str(
        required=True,
    )

    new_password = fields.Str(
        required=True,
        validate=validate.Length(min=8),
    )