from rest_framework.serializers import ModelSerializer

from .models import QwizModel


class QwizSerializer(ModelSerializer):
    class Meta:
        model = QwizModel
        fields = "__all__"
