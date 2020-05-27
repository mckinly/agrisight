from rest_framework import routers
from .api import AgrisightViewSet

router = routers.DefaultRouter()

router.register("api/agrisight", AgrisightViewSet, "agrisight")
print(f"!!!!!!!!!!!!!URLS: {router.urls}")
urlpatterns = router.urls
