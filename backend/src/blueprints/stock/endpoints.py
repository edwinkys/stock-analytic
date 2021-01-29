'''

Endpoints for Individual Ticker

'''

from flask import Blueprint, request
from src.blueprints.stock.model import Stock

stock = Blueprint('stock', __name__, url_prefix='/api')


@stock.route('/info', methods=['POST'])
def info():
    '''

    Get a specific stock information and price data.

    return: JSON of data and information

    '''

    data = request.get_json()

    if data:
        if 'ticker' in data:
            ticker = data['ticker']

            company_stock = Stock(ticker)

            return company_stock.get_info()

    return None
