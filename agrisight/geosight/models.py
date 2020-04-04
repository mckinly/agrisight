from django.db import models


class Location(models.Model):
    longitude = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200)


class Choice(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
