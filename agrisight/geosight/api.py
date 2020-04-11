from geosight.models import User
from rest_framework import viewsets, permissions
from .serializers import GeosightSerializer


class GeosightViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = GeosightSerializer
