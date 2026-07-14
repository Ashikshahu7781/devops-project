from app.extensions import db
from app.models.user import User


class AccountService:

    @staticmethod
    def get_profile(user_id):

        return User.query.get(user_id)

    @staticmethod
    def update_profile(user_id, data):

        user = User.query.get(user_id)

        if not user:
            return None, "User not found"

        existing = User.query.filter(
            User.email == data["email"],
            User.id != user_id,
        ).first()

        if existing:
            return None, "Email already exists"

        user.full_name = data["full_name"]
        user.email = data["email"]

        db.session.commit()

        return user, None

    @staticmethod
    def change_password(user_id, data):

        user = User.query.get(user_id)

        if not user:
            return "User not found"

        if not user.check_password(
            data["current_password"]
        ):
            return "Current password is incorrect"

        user.set_password(
            data["new_password"]
        )

        db.session.commit()

        return None