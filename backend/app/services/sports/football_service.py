class FootballService:

    @staticmethod
    def calculate_points(home_score, away_score):

        if home_score > away_score:
            return 3, 0

        if away_score > home_score:
            return 0, 3

        return 1, 1