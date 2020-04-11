from rest_framework import routers
from .api import GeosightViewSet

router = routers.DefaultRouter()
router.register("api/geosight", GeosightViewSet, "geosight")
urlpatterns = router.urls
