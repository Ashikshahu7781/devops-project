from flask import Flask

from app.config import Config
from app.extensions import (
    db,
    migrate,
    jwt,
    cors,
)
from app.models.user import User
from app.routes.auth_routes import auth_bp
from app.models.tournament import Tournament
from app.routes.tournament_routes import tournament_bp
from app.models.team import Team
from app.routes.team_routes import team_bp
from app.routes.fixture_routes import fixture_bp
from app.routes.standing_routes import standing_bp

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app)
    
    app.register_blueprint(auth_bp)
    app.register_blueprint(tournament_bp)
    app.register_blueprint(team_bp)
    app.register_blueprint(fixture_bp)
    app.register_blueprint(standing_bp)
    
    return app