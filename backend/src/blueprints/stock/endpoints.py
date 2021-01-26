'''

Endpoints for Individual Stock

'''

from flask import Blueprint

stock = Blueprint('stock', __name__, url_prefix='/api')


@stock.route('/data/<stock>')
def data(stock):
    '''

    Get a specific stock information and price data.

    @param stock: String of symbol or ticker for the stock such as AAPL or MSFT

    return: JSON of data and information

    '''

    return "Hello World!"
