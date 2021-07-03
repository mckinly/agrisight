import pytest

from django.urls import reverse
from django.contrib.auth.models import User


@pytest.mark.django_db
def test_user_create():
    User.objects.create_user("john", "doe@fake.com", "johnspassword")
    assert User.objects.count() == 1


@pytest.mark.django_db
def test_api_accessible(client):
    url = reverse("api-root")
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.django_db
def test_list_acreages_unauthorized(client):
    url = reverse("agrisight-list")
    response = client.get(url)
    assert response.status_code == 401
