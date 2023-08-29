from django.urls import path

from .views import ArticlesListApiView,ArticlesGetByYuidApiView

urlpatterns=[
    path('list/',ArticlesListApiView.as_view()),
    path('article/',ArticlesGetByYuidApiView.as_view()),
]