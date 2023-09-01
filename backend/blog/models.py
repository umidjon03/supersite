from django.db import models
import datetime
from uuid import uuid4

PROJECT, NEWS, TEAM, ARTICLE, MASS_MEDIA = (
    ("project", "project"),
    ("news", "news"),
    ("team", "team"),
    ("article", "article"),
    ("mass_media", "mass_media"),
)


# Create your models here.
class BlogModel(models.Model):
    BLOG_TYPES = (PROJECT, NEWS, TEAM, ARTICLE, MASS_MEDIA)
    title = models.CharField(max_length=255)
    date = models.DateField(default=datetime.date.today)
    info = models.TextField()
    photo = models.ImageField(upload_to="articles/", null=True, blank=True)
    yuid = models.UUIDField(default=uuid4, editable=False, unique=True)
    type = models.CharField(max_length=50, choices=BLOG_TYPES)

    def __str__(self):
        return self.title
