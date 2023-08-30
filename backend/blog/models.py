from django.db import models
import datetime
from uuid import uuid4


# Create your models here.
class BlogModel(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(default=datetime.date.today)
    info = models.TextField()
    photo = models.ImageField(upload_to="articles/", null=True, blank=True)
    yuid = models.UUIDField(default=uuid4, editable=False, unique=True)

    def __str__(self):
        return self.title
