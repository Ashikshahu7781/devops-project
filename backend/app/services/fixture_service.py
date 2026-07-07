from app.models.fixture import Fixture
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

        fixture_list = []

        round_number = 1

        for i in range(len(teams)):

                for j in range(i + 1, len(teams)):

                    fixture = Fixture(

                        tournament_id=tournament_id,

                        round=round_number,

                        home_team_id=teams[i].id,

                        away_team_id=teams[j].id,

                        status="scheduled",

                    )

                    fixture_list.append(fixture)

                    round_number += 1

        db.session.add_all(fixture_list)

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