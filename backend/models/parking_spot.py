from . import db


class ParkingSpot(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    spot_number = db.Column(db.String(80), nullable=False)
    floor = db.Column(db.Integer, nullable=False)
    is_shared = db.Column(db.Boolean, nullable=False)
    reservation_periods = db.Column(db.Text, nullable=True)
    reserved_by = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __init__(self, spot_number, floor, is_shared, reservation_periods=None, reserved_by=None):
        self.spot_number = spot_number
        self.floor = floor
        self.is_shared = is_shared
        self.reservation_periods = reservation_periods
        self.reserved_by = reserved_by
