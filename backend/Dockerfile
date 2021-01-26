FROM python:3.9-slim

ENV INSTALL_PATH /backend
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY requirements.txt /backend/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .
CMD gunicorn -c "python:config.gunicorn" "src.app:create_app()"
