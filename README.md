# agrisight

## Description
A tested django, react/redux web app with multi-user authentication for creating, viewing, updating, and deleting agriculture properties with an integrated Google Maps Satellite view.
![Home Overview](/img/home.png)

## Built and Tested using
<table>
<th>
<img src=https://static.djangoproject.com/img/logos/django-logo-negative.png width="200" height="100" />
<img src="https://www.django-rest-framework.org/img/logo.png" height="100" width="200">
<img src=https://portworx.com/wp-content/uploads/2018/05/postgresql-logo.png width="100" height="100">
<img src=https://sujanbyanjankar.com.np/wp-content/uploads/2019/02/react-redux.png width="100" height="100">
<img src=https://docs.pytest.org/en/latest/_static/pytest1.png width="100" height="100">
<img src="https://www.fleekitsolutions.com/wp-content/uploads/2020/04/webdriverio.png" width="200" height="100">
<img src="https://miro.medium.com/max/942/1*FuZYvfMNbe1p44XrqNGGdA.png" width="250" height="100">
</table>

## Running the App
#### Start web server and backend containers
1. Clone this repository
1. Create a `.env` file in the root of the project directory containing `REACT_APP_GOOGLE_API_KEY=<your API key>`
1. Run `docker-compose -f docker-compose.yml up` from the root directory
1. Frontend is accessible on `localhost:8000`

## Testing
### Pytest, Jest and E2E Tests
These tests are run as part of the Github Actions CI/CD process defined in `.github/workflows/test.yml`
### Load Test
A locust.io load test is run as part of the Github Actions CI/CD process defined in `.github/workflows/load_test.yml`