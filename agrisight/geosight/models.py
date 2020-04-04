from django.db import models


class Location(models.Model):
    longitude = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200)
    location_text = models.CharField(max_length=200)

    def __str__(self):
        return self.location_text


class Choice(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)

    def __str__(self):
        return self.choice_text
