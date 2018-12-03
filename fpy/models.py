from django.contrib.postgres.fields.jsonb import JSONField
from django.db import models
from django.utils import timezone


class Dump(models.Model):
    data = JSONField()
    created = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-created']
