'''

API Main Source Code

'''

from flask import Flask
from flask_cors import CORS

# Import blueprints
from src.blueprints.stock.endpoints import stock


def create_app(settings_override=None):
    '''

    Create Flask back end app.

    @settings_override: Override app configuration

    return: Flask app

    '''

    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)

    if settings_override:
        app.config.update(settings_override)

    # Register blueprints
    app.register_blueprint(stock)

    CORS(app)

    return app
