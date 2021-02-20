'''

Endpoints for Individual Ticker

'''

from flask import Blueprint, request, jsonify
from src.blueprints.stock.model import Stock

stock = Blueprint('stock', __name__, url_prefix='/api')


@stock.route('/info/', methods=['GET'])
def info():
    '''

    Get a specific stock information and price data.

    return: JSON of data and information.

    '''

    ticker = request.args.get('ticker')

    if ticker:
        company_stock = Stock(ticker)

        return company_stock.get_info()

    return None


@stock.route('/data/', methods=['GET'])
def data():
    '''

    Get the price data of a specific stock.

    return: Array data of price of stock.

    '''

    ticker = request.args.get('ticker')
    period = request.args.get('period')

    if ticker and period:
        stock = Stock(ticker)

        if period == '1d':
            interval = '2m'
        elif period == '5d':
            interval = '60m'
        elif period == '1m':
            period = '1mo'
            interval = '1d'
        elif period == '3m':
            period = '3mo'
            interval = '1d'
        elif period == '1y':
            interval = '1wk'
        elif period == '5y':
            interval = '1mo'

        price_data = stock.get_data(period, interval)

        return jsonify(price_data)

    return None
