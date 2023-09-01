from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize

from .models import BlogModel
from .serializers import BlogSerializers


class BlogAllListApiView(ListAPIView):
    model = BlogModel
    serializer_class = BlogSerializers
    queryset = model.objects.all()


class BlogOneListApiView(APIView):
    def post(self, request):
        yuid = request.data.get("yuid")
        article = BlogModel.objects.filter(yuid=yuid)

        return Response({"data": serialize("json", article)})


class BlogListByCategoryApiView(APIView):
    def post(self, request):
        category = request.data.get("category")
        articles = BlogModel.objects.filter(type=category)

        return Response({"data": serialize("json", articles)})
