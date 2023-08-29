from django.urls import path

from .views import ContactCreateAPiView

urlpatterns = [
    path("create/", ContactCreateAPiView.as_view()),
]
