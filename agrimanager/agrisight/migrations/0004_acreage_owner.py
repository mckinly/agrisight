# Generated by Django 3.0.5 on 2020-05-13 14:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('agrisight', '0003_auto_20200412_0204'),
    ]

    operations = [
        migrations.AddField(
            model_name='acreage',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='acreage', to=settings.AUTH_USER_MODEL),
        ),
    ]
