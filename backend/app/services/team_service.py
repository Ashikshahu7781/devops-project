from app.extensions import db
from app.models.team import Team


class TeamService:

    @staticmethod
    def get_all(tournament_id=None):

        query = Team.query

        if tournament_id:
            query = query.filter_by(
                tournament_id=tournament_id
            )

        return query.order_by(
            Team.created_at.desc()
        ).all()

    @staticmethod
    def create(data):

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
    def update(team_id, data):

        team = Team.query.get(team_id)

        if not team:
            return None

        team.tournament_id = data["tournament_id"]
        team.name = data["name"]
        team.coach = data["coach"]
        team.captain = data["captain"]
        team.contact_email = data["contact_email"]
        team.contact_phone = data["contact_phone"]
        team.logo = data.get("logo")

        db.session.commit()

        return team
    
    @staticmethod
    def delete(team_id):

        team = Team.query.get(team_id)

        if not team:
            return False

        db.session.delete(team)
        db.session.commit()

        return True