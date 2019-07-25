from django.db import models
from datetime import datetime

class Case(models.Model):
    casenumber = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    investigator = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    is_published = models.BooleanField(default=True)
    assigned_date = models.DateTimeField(default=datetime.now, blank=True)
    