from django.db import models
from uuid import uuid4


# Create your models here.
class ClientsModel(models.Model):
    name = models.CharField(max_length=125)
    photo = models.ImageField(upload_to="clients/", null=True, blank=True)
    yuid = models.UUIDField(default=uuid4, editable=False, unique=True)

    def __str__(self):
        return self.name
