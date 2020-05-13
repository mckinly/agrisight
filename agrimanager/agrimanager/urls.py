from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("accounts.urls")),
    path("", include("frontend.urls")),
    path("", include("agrisight.urls")),
    path("admin/", admin.site.urls),
]
