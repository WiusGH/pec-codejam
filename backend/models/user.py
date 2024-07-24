from . import db
from werkzeug.security import generate_password_hash


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    reserved_spots = db.relationship('ParkingSpot', backref='user', lazy=True)
    sanctions = db.Column(db.Text, nullable=True)
    disabled = db.Column(db.Boolean, default=False, nullable=False)
    user_type = db.Column(db.String(80), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "user_type": self.user_type
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
