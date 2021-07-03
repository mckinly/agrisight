from rest_framework import routers
from .api import AcreageViewSet

router = routers.DefaultRouter()

router.register("api/acreage", AcreageViewSet, "acreage")
urlpatterns = router.urls
