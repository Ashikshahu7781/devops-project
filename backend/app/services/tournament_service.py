from datetime import datetime

from app.extensions import db
from app.models.tournament import Tournament


class TournamentService:

    @staticmethod
    def get_all():
        tournaments = Tournament.query.order_by(
            Tournament.created_at.desc()
        ).all()

        return tournaments

    @staticmethod
    def create(data):
        tournament = Tournament(
            name=data["name"],
            description=data.get("description"),
            sport=data["sport"],
            venue=data["venue"],
            start_date=data["start_date"],
            end_date=data["end_date"],
            max_teams=data["max_teams"],
            status=data.get("status", "upcoming"),
        )

        db.session.add(tournament)
        db.session.commit()

        return tournament