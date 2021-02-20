'''

Stock Class

'''

import pandas as pd
import yfinance as yf

from sklearn.linear_model import LinearRegression


class Stock():
    '''

    This class is to gather information and data about a certain stock.

    methods:
    - get_info
    - get_holders
    - get_calendar
    - get_data

    '''

    def __init__(self, symbol):
        self.symbol = symbol
        self.stock = yf.Ticker(symbol)

    def __create_trendline(self, x, y):
        '''

        Create trendline from the data.

        @param x: Pandas series of datetime like pd.to_datetime(stock_data['Date']).values.astype(float).reshape(-1, 1).
        @param y: Pandas dataframe of price.

        return: Numpy array of predicted y based on x.

        '''

        reg = LinearRegression()

        model = reg.fit(x, y)

        prediction = model.predict(x)

        return prediction

    def __calculate_average(self, df, column):
        '''

        Calculate the average overall value of a stock data or column, excluding Date.

        @param df: Pandas dataframe of the data.
        @param column: String of the column name.

        return: Average value.

        '''

        return df[column].mean()

    def __get_stock_data(self, period='3mo', interval='1d', date_range=[]):
        '''

        Get the stock price based on date.

        @param period: The period of the stock data (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max).
        @param interval: The interval per data (1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo).
        @param date_range: Array of range of string date like ['2020-01-01', '2020-12-31'].

        return: Dataframe of stock data

        '''

        if date_range:
            stock_data = yf.download(
                tickers=self.symbol,
                start=date_range[0],
                end=date_range[1]
            )
        else:
            stock_data = yf.download(
                tickers=self.symbol,
                period=period,
                interval=interval
            )

        return stock_data

    def get_info(self, datapoints=None):
        '''

        Get summary of the stock.

        @param datapoints: Array of datapoints to be returned.

        return: Dictionary containing the summary.

        '''

        if datapoints:
            return {key: value for key, value in self.stock.info.items() if key in datapoints}
        else:
            return self.stock.info

    def get_holders(self, n_result=None):
        '''

        Get the shareholders of the company.

        @param n_result: int to return some of the shareholders, max: 10.

        return: Dictionary of shareholders.

        '''

        shareholders = self.stock.institutional_holders

        shareholders = shareholders.to_dict('index')

        if n_result:
            return dict(list(shareholders.items())[:n_result])
        else:
            return shareholders

    def get_calendar(self):
        '''

        Get the update from the latest schedule.

        return: Dictionary of the update.

        '''

        update = self.stock.calendar.to_dict().get('Value')

        return update

    def get_data(self, period='3mo', interval='1d', date_range=None, trendline=None, average=None):
        '''

        Get the share price of the company.

        @param period: The period of the stock data (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max).
        @param interval: The interval per data (1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo).
        @param date_range: Array of range of string date like ['2020-01-01', '2020-12-31'].
        @param trendline: String of the name of the column as y for training except for Date.
        @param average: String of the name of the column to get the average of (excluding Date).

        return: list of the stock data

        '''

        date_column = 'Date'

        stock_data = self.__get_stock_data(period, interval, date_range)

        # Enabling access to Date
        stock_data = stock_data.reset_index()

        # OHLC Average
        ohlc_avg = [
            (stock_data['Open'].values[i]
            + stock_data['High'].values[i]
            + stock_data['Low'].values[i]
            + stock_data['Close'].values[i])/4
            for i in range(len(stock_data))
        ]

        stock_data['OHLC Average'] = ohlc_avg

        if interval in ['1m', '2m', '5m', '15m', '30m', '60m', '1h']:
            date_column = 'Datetime'

        if trendline:
            x = pd.to_datetime(stock_data[date_column]).values.astype(float).reshape(-1, 1)
            y = stock_data[[trendline]]
            pred = self.__create_trendline(x, y)

            column_name = trendline + ' Prediction'
            stock_data[column_name] = pd.Series(pred)

        if average:
            mean_value = self.__calculate_average(stock_data, average)

            mean_name = average + ' Mean'
            stock_data[mean_name] = [mean_value for i in range(len(stock_data))]

        return stock_data.to_dict('records')
