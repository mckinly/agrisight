from rest_framework import serializers
from agrisight.models import Acreage


class AgrisightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acreage
        fields = "__all__"
