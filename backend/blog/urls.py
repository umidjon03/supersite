from django.urls import path

from .views import BlogAllListApiView, BlogOneListApiView, BlogListByCategoryApiView

urlpatterns = [
    path("all/", BlogAllListApiView.as_view()),
    path("article/", BlogOneListApiView.as_view()),
    path("category/", BlogListByCategoryApiView.as_view()),
]
