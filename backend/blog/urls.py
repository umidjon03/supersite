from django.urls import path

from .views import BlogAllListApiView

urlpatterns = [
    path("all/", BlogAllListApiView.as_view()),
]
