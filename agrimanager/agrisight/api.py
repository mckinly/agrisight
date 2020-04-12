from agrisight.models import User
from rest_framework import viewsets, permissions
from .serializers import AgrisightSerializer


class AgrisightViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AgrisightSerializer
