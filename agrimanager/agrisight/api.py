from agrisight.models import Acreage
from rest_framework import viewsets, permissions
from .serializers import AgrisightSerializer


class AgrisightViewSet(viewsets.ModelViewSet):
    queryset = Acreage.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AgrisightSerializer
