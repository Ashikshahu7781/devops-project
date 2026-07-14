from app.models.team import Team
from app.models.fixture import Fixture
from app.services.standing_service import StandingService


class TournamentStatisticsService:

    @staticmethod
    def get_statistics(tournament_id):

        teams = Team.query.filter_by(
            tournament_id=tournament_id
        ).count()

        fixtures = Fixture.query.filter_by(
            tournament_id=tournament_id
        ).all()

        total_matches = len(fixtures)

        completed_matches = len([
            fixture
            for fixture in fixtures
            if fixture.status == "completed"
        ])

        remaining_matches = (
            total_matches - completed_matches
        )

        total_goals = sum(
            fixture.home_score + fixture.away_score
            for fixture in fixtures
            if fixture.status == "completed"
        )

        standings = StandingService.get_standings(
            tournament_id
        )

        current_leader = (
            standings[0]["team"]
            if standings else None
        )

        champion = None

        if (
            total_matches > 0
            and completed_matches == total_matches
            and standings
        ):
            champion = standings[0]["team"]

        return {
            "teams": teams,
            "total_matches": total_matches,
            "completed_matches": completed_matches,
            "remaining_matches": remaining_matches,
            "total_goals": total_goals,
            "current_leader": current_leader,
            "champion": champion,
        }