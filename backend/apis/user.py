from flask import Blueprint, jsonify, request
from werkzeug.security import check_password_hash
from models.user import User

user_bp = Blueprint('user_bp', __name__, url_prefix='/api/v1/user')


@user_bp.route('/create_user', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(username=data['username'], email=data['email'], password=data['password'])
    user.save()
    return jsonify({'message': 'User created successfully'})


@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'})
