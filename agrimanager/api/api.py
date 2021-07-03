from api.models import Acreage
from rest_framework import viewsets, permissions
from .serializers import AcreageSerializer


class AcreageViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AcreageSerializer

    def get_queryset(self):
        return self.request.user.acreage.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
