from rest_framework import serializers

from .models import ArticlesModel


class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticlesModel
        fields = "__all__"
