from rest_framework.generics import ListAPIView

from .serializers import ClientsSerializer
from .models import ClientsModel


class ClientsApiView(ListAPIView):
    model = ClientsModel
    serializer_class = ClientsSerializer
    queryset = model.objects.all()
