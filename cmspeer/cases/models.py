from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Case(models.Model):
    casenumber = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    investigator = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)
    owner = models.ForeignKey(
        User, related_name="cases", on_delete=models.CASCADE, null=True)
    assigned_date = models.DateTimeField(default=datetime.now, blank=True)
