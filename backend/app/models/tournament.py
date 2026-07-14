from datetime import datetime

from app.extensions import db


class Tournament(db.Model):
    __tablename__ = "tournaments"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(150), nullable=False)

    description = db.Column(db.Text)

    sport = db.Column(db.String(50), nullable=False)

    venue = db.Column(db.String(150), nullable=False)

    start_date = db.Column(db.Date, nullable=False)

    end_date = db.Column(db.Date, nullable=False)

    max_teams = db.Column(db.Integer, nullable=False)

    status = db.Column(
        db.String(30),
        default="upcoming",
        nullable=False,
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )
    created_by = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False,
)
    
    teams = db.relationship(
    "Team",
    backref="tournament",
    lazy=True,
    cascade="all, delete-orphan",
)
    owner = db.relationship(
    "User",
    backref="tournaments"
)