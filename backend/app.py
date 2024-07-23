from flask import Flask, render_template
from config.config import Config
from models import db
from flask_cors import CORS
from apis.user import user_bp


def create_app():
    new_app = Flask(__name__)
    new_app.config.from_object(Config)
    db.init_app(new_app)
    CORS(new_app, resources={r"*": {"origins": "*"}})
    new_app.register_blueprint(user_bp, url_prefix='/api')

    with new_app.app_context():
        db.create_all()

    @new_app.route('/')
    def index():
        return render_template('index.html')

    @new_app.route('/docs')
    def docs():
        return render_template('docs.html')

    return new_app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
