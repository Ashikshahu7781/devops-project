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
    @staticmethod
    def update(tournament_id, data):
        tournament = Tournament.query.get(tournament_id)

        if not tournament:
            return None

        tournament.name = data["name"]
        tournament.description = data.get("description")
        tournament.sport = data["sport"]
        tournament.venue = data["venue"]
        tournament.start_date = data["start_date"]
        tournament.end_date = data["end_date"]
        tournament.max_teams = data["max_teams"]
        tournament.status = data["status"]

        db.session.commit()

        return tournament
    @staticmethod
    def delete(tournament_id):
        tournament = Tournament.query.get(tournament_id)

        if not tournament:
            return False

        db.session.delete(tournament)
        db.session.commit()

        return True  
    @staticmethod
    def get_by_id(tournament_id):

        return Tournament.query.get(tournament_id)