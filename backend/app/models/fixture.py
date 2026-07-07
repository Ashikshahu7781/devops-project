from datetime import datetime

from app.extensions import db


class Fixture(db.Model):

    __tablename__ = "fixtures"

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    tournament_id = db.Column(
        db.Integer,
        db.ForeignKey("tournaments.id"),
        nullable=False,
    )

    round = db.Column(
        db.Integer,
        nullable=False,
    )

    home_team_id = db.Column(
        db.Integer,
        db.ForeignKey("teams.id"),
        nullable=False,
    )

    away_team_id = db.Column(
        db.Integer,
        db.ForeignKey("teams.id"),
        nullable=False,
    )

    home_score = db.Column(
        db.Integer,
        default=0,
    )

    away_score = db.Column(
        db.Integer,
        default=0,
    )

    status = db.Column(
        db.String(20),
        default="scheduled",
    )

    match_date = db.Column(
        db.DateTime,
        nullable=True,
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )
    home_team = db.relationship(
        "Team",
        foreign_keys=[home_team_id]
    )

    away_team = db.relationship(
        "Team",
        foreign_keys=[away_team_id]
    )

    tournament = db.relationship(
        "Tournament"
    )