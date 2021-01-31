FROM node:15.7-buster-slim

ENV INSTALL_PATH /frontend
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY package.json /frontend/package.json
RUN npm install
