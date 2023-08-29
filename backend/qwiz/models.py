from django.db import models

# Create your models here.
INTERNET_STORE, LANDING_PAGE, CORPORATION_SITE, NOT_SURE = (
    ("internet_store", "internet_store"),
    ("landing_page", "landing_page"),
    ("corporation_site", "corporation_site"),
    ("not_sure", "not_sure"),
)


class QwizModel(models.Model):
    WEBSITE_TYPES = (INTERNET_STORE, LANDING_PAGE, CORPORATION_SITE, NOT_SURE)
    type = models.CharField(choices=WEBSITE_TYPES, max_length=55, default=NOT_SURE)
    style_logo = models.CharField(max_length=15)
    creativity = models.CharField(max_length=55)
    functionality = models.CharField(max_length=55)
    website = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=55)
    phone = models.CharField(max_length=15)
    comment = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
