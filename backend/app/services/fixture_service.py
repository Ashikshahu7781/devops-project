from app.extensions import db
from app.models.fixture import Fixture
from app.models.team import Team


class FixtureService:

    @staticmethod
    def get_all(tournament_id=None):

        query = Fixture.query

        if tournament_id:
            query = query.filter_by(
                tournament_id=tournament_id
            )

        return query.order_by(
            Fixture.round,
            Fixture.id,
        ).all()

    @staticmethod
    def generate(tournament_id):

        teams = Team.query.filter_by(
            tournament_id=tournament_id
        ).all()

        if len(teams) < 2:
            return False

        # Remove old fixtures
        Fixture.query.filter_by(
            tournament_id=tournament_id
        ).delete()

        db.session.commit()

        teams = list(teams)

        # Add BYE for odd number of teams
        if len(teams) % 2 == 1:
            teams.append(None)

        n = len(teams)
        rounds = n - 1
        half = n // 2

        fixtures = []

        for round_number in range(1, rounds + 1):

            for i in range(half):

                home = teams[i]
                away = teams[n - 1 - i]

                if home is None or away is None:
                    continue

                fixtures.append(
                    Fixture(
                        tournament_id=tournament_id,
                        round=round_number,
                        home_team_id=home.id,
                        away_team_id=away.id,
                        status="scheduled",
                    )
                )

            # Rotate teams (Circle Method)
            teams = (
                [teams[0]]
                + [teams[-1]]
                + teams[1:-1]
            )

        db.session.add_all(fixtures)
        db.session.commit()

        return True

    @staticmethod
    def update_score(
        fixture_id,
        home_score,
        away_score,
    ):

        fixture = Fixture.query.get(fixture_id)

        if not fixture:
            return None

        fixture.home_score = home_score
        fixture.away_score = away_score
        fixture.status = "completed"

        db.session.commit()

        return fixture