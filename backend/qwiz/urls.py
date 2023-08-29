from django.urls import path

from .views import QwizCreateApiView

urlpatterns = [path("create/", QwizCreateApiView.as_view())]
