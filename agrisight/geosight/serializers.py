from rest_framework import serializers
from geosight.models import User


class GeosightSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
