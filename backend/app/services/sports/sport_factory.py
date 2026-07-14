from app.services.sports.football_service import FootballService
from app.services.sports.cricket_service import CricketService
from app.services.sports.volleyball_service import VolleyballService
from app.services.sports.badminton_service import BadmintonService


class SportFactory:

    @staticmethod
    def get_service(sport):

        sport = sport.lower()

        services = {
            "football": FootballService(),
            "cricket": CricketService(),
            "volleyball": VolleyballService(),
            "badminton": BadmintonService(),
        }

        return services.get(sport, FootballService())