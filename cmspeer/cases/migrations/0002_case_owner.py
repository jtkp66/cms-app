# Generated by Django 2.2.3 on 2019-07-26 09:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cases', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='case',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='cases', to=settings.AUTH_USER_MODEL),
        ),
    ]
