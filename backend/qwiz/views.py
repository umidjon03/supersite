from rest_framework.generics import CreateAPIView

from .models import QwizModel
from .serializers import QwizSerializer


class QwizCreateApiView(CreateAPIView):
    model = QwizModel
    serializer_class = QwizSerializer
    queryset = model.objects.all()
