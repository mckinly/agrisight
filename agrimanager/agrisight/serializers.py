from rest_framework import serializers
from agrisight.models import User


class AgrisightSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
