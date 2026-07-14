class CricketService:

    @staticmethod
    def calculate_points(home_score, away_score):

        if home_score > away_score:
            return 2, 0

        if away_score > home_score:
            return 0, 2

        return 1, 1