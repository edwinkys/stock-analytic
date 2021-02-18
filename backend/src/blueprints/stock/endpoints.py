'''

Endpoints for Individual Ticker

'''

from flask import Blueprint, request, make_response, jsonify
from src.blueprints.stock.model import Stock

stock = Blueprint('stock', __name__, url_prefix='/api')


@stock.route('/info/', methods=['GET'])
def info():
    '''

    Get a specific stock information and price data.

    return: JSON of data and information

    '''

    ticker = request.args.get('ticker')

    if ticker:
        company_stock = Stock(ticker)

        return company_stock.get_info()

    return None
