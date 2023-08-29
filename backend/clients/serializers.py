from rest_framework import serializers

from .models import ClientsModel


class ClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientsModel
        fields = "__all__"
