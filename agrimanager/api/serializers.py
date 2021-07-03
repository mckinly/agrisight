from rest_framework import serializers
from api.models import Acreage


class AcreageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acreage
        fields = "__all__"
