from datetime import datetime

from app.extensions import db


class Team(db.Model):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key=True)

    tournament_id = db.Column(
        db.Integer,
        db.ForeignKey("tournaments.id"),
        nullable=False,
    )

    name = db.Column(
        db.String(100),
        nullable=False,
    )

    coach = db.Column(
        db.String(100),
        nullable=False,
    )

    captain = db.Column(
        db.String(100),
        nullable=False,
    )

    contact_email = db.Column(
        db.String(120),
        nullable=False,
    )

    contact_phone = db.Column(
        db.String(20),
        nullable=False,
    )

    logo = db.Column(
        db.String(255),
        nullable=True,
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )