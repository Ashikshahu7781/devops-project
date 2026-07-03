from app.extensions import db
from app.models.user import User


class AuthService:

    @staticmethod
    def register(data):
        existing_user = User.query.filter_by(
            email=data["email"]
        ).first()

        if existing_user:
            return None, "Email already exists"

        user = User(
            full_name=data["full_name"],
            email=data["email"],
        )

        user.set_password(data["password"])

        db.session.add(user)
        db.session.commit()

        return user, None