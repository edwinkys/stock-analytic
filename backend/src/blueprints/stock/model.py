'''

Stock Class

'''

import pandas as pd
import yfinance as yf

from sklearn.linear_model import LinearRegression
from yahoo_fin.stock_info import get_live_price


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

    def __create_trendline(self, x, y, x_predict):
        '''

        Create trendline from the data.

        @param x: Pandas series of datetime like pd.to_datetime(stock_data['Date']).values.astype(float).reshape(-1, 1).
        @param y: Pandas dataframe of price.
        @param x_predict: Pandas series of datetime to predict.

        return: Numpy array of predicted y based on x.

        '''

        reg = LinearRegression()

        model = reg.fit(x, y)

        prediction = model.predict(x_predict).ravel()

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
                end=date_range[1],
                prepost=True
            )
        else:
            stock_data = yf.download(
                tickers=self.symbol,
                period=period,
                interval=interval,
                prepost=True
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

    def get_latest_price(self):
        '''

        Get the latest price of the stock

        return: Latest price of the stock

        '''

        latest_price = get_live_price(self.symbol)

        return latest_price

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
        ts_format = '%b %d, %Y'

        if interval in ['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h']:
            date_column = 'Datetime'
            ts_format = '%a %d at %H:%M'

        stock_data = self.__get_stock_data(period, interval, date_range)

        # Enabling access to Date
        stock_data = stock_data.reset_index()

        # Drop column close
        stock_data = stock_data.drop(columns=['Close'])

        # Rename column
        stock_data = stock_data.rename(columns={'Adj Close': 'Close'})

        # Datetime
        stock_data['Time'] = [ts.strftime(ts_format) for i, ts in stock_data[date_column].iteritems()]
        stock_data['Index'] = [i + 1 for i, ts in stock_data[date_column].iteritems()]

        if trendline:
            try:
                temp_stock_data = stock_data

                if temp_stock_data.isnull().values.any():
                    temp_stock_data = temp_stock_data.dropna()

                x = temp_stock_data[['Index']]
                x_predict = stock_data[['Index']]
                # x = pd.to_datetime(temp_stock_data[date_column]).values.astype(float).reshape(-1, 1)
                # x_predict = pd.to_datetime(stock_data[date_column]).values.astype(float).reshape(-1, 1)

                y = temp_stock_data[[trendline]]

                pred = self.__create_trendline(x, y, x_predict)

                column_name = trendline + ' Prediction'
                stock_data[column_name] = pd.Series(pred)
            except ValueError:
                return None

        if average:
            try:
                mean_value = self.__calculate_average(stock_data, average)

                mean_name = average + ' Mean'
                stock_data[mean_name] = [mean_value for i in range(len(stock_data))]
            except ValueError:
                return None

        # Remove date or datetime column
        columns_to_keep = ['Close', 'Time', 'Close Prediction', 'Close Mean']
        stock_data.drop(stock_data.columns.difference(columns_to_keep), 1, inplace=True)

        # Remove NaN value
        stock_data.dropna(inplace=True)

        return stock_data.to_dict('records')
