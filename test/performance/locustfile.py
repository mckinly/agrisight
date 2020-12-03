import time
from locust import HttpUser, task
import requests


class QuickstartUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/#/dashboard")

    @task(3)
    def view_item(self):
        pass

    def on_start(self):
        self.client.post("/api/auth/login", json={"username": "test", "password": "password123"})
        pass
