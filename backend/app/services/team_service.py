from app.extensions import db
from app.models.team import Team
from app.models.tournament import Tournament


class TeamService:

    @staticmethod
    def get_all(tournament_id, user_id):

        tournament = Tournament.query.filter_by(
            id=tournament_id,
            created_by=user_id,
        ).first()

        if not tournament:
            return []

        return (
            Team.query
            .filter_by(tournament_id=tournament_id)
            .order_by(Team.created_at.desc())
            .all()
        )

    @staticmethod
    def create(data, user_id):

        tournament = Tournament.query.filter_by(
            id=data["tournament_id"],
            created_by=user_id,
        ).first()

        if not tournament:
            return None

        team = Team(
            tournament_id=data["tournament_id"],
            name=data["name"],
            coach=data["coach"],
            captain=data["captain"],
            contact_email=data["contact_email"],
            contact_phone=data["contact_phone"],
            logo=data.get("logo"),
        )

        db.session.add(team)
        db.session.commit()

        return team

    @staticmethod
    def update(team_id, data, user_id):

        team = (
            Team.query
            .join(Tournament)
            .filter(
                Team.id == team_id,
                Tournament.created_by == user_id,
            )
            .first()
        )

        if not team:
            return None

        team.name = data["name"]
        team.coach = data["coach"]
        team.captain = data["captain"]
        team.contact_email = data["contact_email"]
        team.contact_phone = data["contact_phone"]
        team.logo = data.get("logo")

        db.session.commit()

        return team

    @staticmethod
    def delete(team_id, user_id):

        team = (
            Team.query
            .join(Tournament)
            .filter(
                Team.id == team_id,
                Tournament.created_by == user_id,
            )
            .first()
        )

        if not team:
            return False

        db.session.delete(team)
        db.session.commit()

        return True