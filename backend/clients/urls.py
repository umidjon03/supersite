from django.urls import path

from .views import ClientsApiView

urlpatterns = [
    path("list/", ClientsApiView.as_view()),
]
