FROM nikolaik/python-nodejs:latest
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN python3 -m pip install -r requirements.txt
COPY . /code/
RUN npm install
RUN npm run dev&