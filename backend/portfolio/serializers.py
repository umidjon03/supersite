from rest_framework import serializers

from .models import PortfolioModel


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioModel
        fields = "__all__"
