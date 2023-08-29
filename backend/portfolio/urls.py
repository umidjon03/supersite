from django.urls import path

from .views import PortfolioListApiView, NumberOfSitesAPiView

urlpatterns = [
    path("list/", PortfolioListApiView.as_view()),
    path("numbers/", NumberOfSitesAPiView.as_view()),
]
