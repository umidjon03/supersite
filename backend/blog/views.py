from rest_framework.generics import ListAPIView

from .models import BlogModel
from .serializers import BlogSerializers


class BlogAllListApiView(ListAPIView):
    model = BlogModel
    serializer_class = BlogSerializers
    queryset = model.objects.all()
