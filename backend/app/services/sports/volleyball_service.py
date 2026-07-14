class VolleyballService:

    @staticmethod
    def calculate_points(home_score, away_score):

        if home_score > away_score:
            return 3, 0

        return 0, 3