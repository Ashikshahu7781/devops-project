from marshmallow import Schema, fields


class UserSchema(Schema):

    id = fields.Int(dump_only=True)

    full_name = fields.Str()

    email = fields.Email()

    role = fields.Str()

    created_at = fields.DateTime()

    updated_at = fields.DateTime()