from app.models.tournament import Tournament
from app.models.team import Team
from app.models.fixture import Fixture


class DashboardService:

    @staticmethod
    def get_dashboard(user_id):

        tournaments = Tournament.query.filter_by(
            created_by=user_id
        ).all()

        tournament_ids = [t.id for t in tournaments]

        total_tournaments = len(tournaments)

        active = len([
            t for t in tournaments
            if t.status == "active"
        ])

        upcoming = len([
            t for t in tournaments
            if t.status == "upcoming"
        ])

        completed = len([
            t for t in tournaments
            if t.status == "completed"
        ])

        if tournament_ids:

            teams = Team.query.filter(
                Team.tournament_id.in_(tournament_ids)
            ).count()

            fixtures = Fixture.query.filter(
                Fixture.tournament_id.in_(tournament_ids)
            ).all()

        else:

            teams = 0
            fixtures = []

        total_fixtures = len(fixtures)

        completed_matches = len([
            f for f in fixtures
            if f.status == "completed"
        ])

        total_goals = sum(
            f.home_score + f.away_score
            for f in fixtures
            if f.status == "completed"
        )

        latest = sorted(
            tournaments,
            key=lambda x: x.created_at,
            reverse=True
        )[:5]

        upcoming_fixtures = []

        for fixture in fixtures:

            if fixture.status == "scheduled":

                upcoming_fixtures.append({

                    "id": fixture.id,

                    "home_team": fixture.home_team.name,

                    "away_team": fixture.away_team.name,

                    "round": fixture.round,

                    "status": fixture.status,

                    "match_date": (
                        fixture.match_date.strftime(
                            "%d %b %Y %I:%M %p"
                        )
                        if fixture.match_date
                        else "Not Scheduled"
                    ),

                })

        return {

            "total_tournaments": total_tournaments,

            "active_tournaments": active,

            "completed_tournaments": completed,

            "upcoming_tournaments": upcoming,

            "total_teams": teams,

            "total_fixtures": total_fixtures,

            "completed_matches": completed_matches,

            "total_goals": total_goals,

            "latest_tournaments": [

                {

                    "id": t.id,

                    "name": t.name,

                    "sport": t.sport,

                    "status": t.status,

                }

                for t in latest

            ],

            "upcoming_fixtures": upcoming_fixtures[:5],

            "recent_activity": []

        }