from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize

from .models import ArticlesModel
from .serializers import ArticlesSerializer


class ArticlesListApiView(ListAPIView):
    model = ArticlesModel
    serializer_class = ArticlesSerializer
    queryset = model.objects.all()


class ArticlesGetByYuidApiView(APIView):
    def post(self, request):
        yuid = request.data.get("yuid")
        article = ArticlesModel.objects.filter(yuid=yuid)

        return Response({"data": serialize("json", article)})
