from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import PortfolioModel
from .serializers import PortfolioSerializer


class PortfolioListApiView(ListAPIView):
    model = PortfolioModel
    serializer_class = PortfolioSerializer
    queryset = model.objects.all()


class NumberOfSitesAPiView(APIView):
    def get(self, request):
        model = PortfolioModel
        all = model.objects.all().count()
        landing_page = model.objects.filter(type="landing_page").count()
        internet_store = model.objects.filter(type="internet_store").count()
        corporation_site = model.objects.filter(type="corporation_site").count()

        return Response(
            {
                "all": all,
                "landing_page": landing_page,
                "internet_store": internet_store,
                "corporation_site": corporation_site,
            }
        )
