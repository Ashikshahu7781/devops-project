from app.extensions import db
from app.models.user import User
from flask_jwt_extended import create_access_token

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
    
    @staticmethod
    def login(data):

        user = User.query.filter_by(
            email=data["email"]
        ).first()

        if not user:
            return None, "Invalid email or password"

        if not user.check_password(data["password"]):
            return None, "Invalid email or password"

        access_token = create_access_token(
            identity=str(user.id),
            additional_claims={
                "email": user.email,
                "role": user.role,
            },
        )

        return {
            "access_token": access_token,
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email,
                "role": user.role,
            },
        }, None