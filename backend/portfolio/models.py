from django.db import models
from uuid import uuid4

# Create your models here.
INTERNET_STORE, LANDING_PAGE, CORPORATION_SITE = (
    ("internet_store", "internet_store"),
    ("landing_page", "landing_page"),
    ("corporation_site", "corporation_site"),
)


class PortfolioModel(models.Model):
    WEBSITE_TYPES = (INTERNET_STORE, LANDING_PAGE, CORPORATION_SITE)
    title = models.CharField(max_length=160)
    type = models.CharField(
        choices=WEBSITE_TYPES, null=False, blank=False, max_length=125
    )
    photo = models.ImageField(upload_to="portfolio/", null=True, blank=True)
    yuid = models.UUIDField(default=uuid4, editable=False, unique=True)
    info = models.TextField()
    link = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title
