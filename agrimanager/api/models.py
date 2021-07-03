from django.db import models
from django.contrib.auth.models import User


class Acreage(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    email = models.EmailField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="acreage", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.name
