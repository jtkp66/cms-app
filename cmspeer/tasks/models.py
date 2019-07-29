from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Task(models.Model):
    casenumber = models.CharField(max_length=100)
    task = models.CharField(max_length=50)
    priority = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="tasks", on_delete=models.CASCADE, null=True)
    due_date = models.DateTimeField(default=datetime.now, blank=True)
