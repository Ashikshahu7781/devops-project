from app.models.team import Team
from app.models.fixture import Fixture
from app.models.tournament import Tournament

from app.services.sports.sport_factory import SportFactory

class StandingService:

    @staticmethod
    def get_standings(tournament_id):

        teams = Team.query.filter_by(
            tournament_id=tournament_id
        ).all()

        standings = {}

        # Initialize standings
        for team in teams:
            standings[team.id] = {
                "team_id": team.id,
                "team": team.name,
                "played": 0,
                "won": 0,
                "draw": 0,
                "lost": 0,
                "gf": 0,
                "ga": 0,
                "gd": 0,
                "points": 0,
            }

        fixtures = Fixture.query.filter_by(
            tournament_id=tournament_id,
            status="completed",
        ).all()

        for fixture in fixtures:

            home = standings[fixture.home_team_id]
            away = standings[fixture.away_team_id]

            home["played"] += 1
            away["played"] += 1

            home["gf"] += fixture.home_score
            home["ga"] += fixture.away_score

            away["gf"] += fixture.away_score
            away["ga"] += fixture.home_score

            # Win
            if fixture.home_score > fixture.away_score:

                home["won"] += 1
                away["lost"] += 1

                home["points"] += 3

            # Away Win
            elif fixture.home_score < fixture.away_score:

                away["won"] += 1
                home["lost"] += 1

                away["points"] += 3

            # Draw
            else:

                home["draw"] += 1
                away["draw"] += 1

                home["points"] += 1
                away["points"] += 1

        # Goal Difference
        for team in standings.values():

            team["gd"] = team["gf"] - team["ga"]

        return sorted(
            standings.values(),
            key=lambda x: (
                x["points"],
                x["gd"],
                x["gf"],
            ),
            reverse=True,
        )