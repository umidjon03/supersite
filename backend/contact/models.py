from django.db import models


# Create your models here.
class ContactModel(models.Model):
    name = models.CharField(max_length=125)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    comment = models.CharField(max_length=255, null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
