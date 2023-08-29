from rest_framework.generics import CreateAPIView

from .models import ContactModel
from .serializers import ContactSerializer


class ContactCreateAPiView(CreateAPIView):
    model = ContactModel
    serializer_class = ContactSerializer
    queryset = model.objects.all()
