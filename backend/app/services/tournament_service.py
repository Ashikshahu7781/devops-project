from app.extensions import db
from app.models.tournament import Tournament


class TournamentService:

    @staticmethod
    def get_all(user_id):
        return (
            Tournament.query
            .filter_by(created_by=user_id)
            .order_by(Tournament.created_at.desc())
            .all()
        )

    @staticmethod
    def create(data, user_id):

        tournament = Tournament(
            name=data["name"],
            description=data.get("description"),
            sport=data["sport"],
            venue=data["venue"],
            start_date=data["start_date"],
            end_date=data["end_date"],
            max_teams=data["max_teams"],
            status=data.get("status", "upcoming"),
            created_by=user_id,
        )

        db.session.add(tournament)
        db.session.commit()

        return tournament

    @staticmethod
    def get_by_id(tournament_id, user_id):

        return Tournament.query.filter_by(
            id=tournament_id,
            created_by=user_id,
        ).first()

    @staticmethod
    def update(tournament_id, data, user_id):

        tournament = Tournament.query.filter_by(
            id=tournament_id,
            created_by=user_id,
        ).first()

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
    def delete(tournament_id, user_id):

        tournament = Tournament.query.filter_by(
            id=tournament_id,
            created_by=user_id,
        ).first()

        if not tournament:
            return False

        db.session.delete(tournament)
        db.session.commit()

        return True