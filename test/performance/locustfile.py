import time
import logging
from locust import HttpUser, task, events


@events.quitting.add_listener
def _(environment, **kw):
    if environment.stats.total.fail_ratio > 0.2:
        logging.error("Test failed due to failure ratio > 20%")
        environment.process_exit_code = 1
    elif environment.stats.total.avg_response_time > 200:
        logging.error("Test failed due to average response time ratio > 200 ms")
        environment.process_exit_code = 1
    elif environment.stats.total.get_response_time_percentile(0.95) > 800:
        logging.error("Test failed due to 95th percentile response time > 800 ms")
        environment.process_exit_code = 1
    else:
        environment.process_exit_code = 0


class QuickstartUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/#/dashboard")

    # @task(3)
    # def view_item(self):
    #     pass
    #
    # def on_start(self):
    #     self.client.post("/api/auth/login", json={"username": "test", "password": "password123"})
    #     pass
