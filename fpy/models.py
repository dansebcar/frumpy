from django.contrib.auth import get_user_model
from django.contrib.postgres.fields.jsonb import JSONField
from django.db import models
from django.utils import timezone
from i18nfield.fields import I18nCharField

from fpy.managers import InteractionManager

User = get_user_model()


class Dump(models.Model):
    data = JSONField()
    created = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return str(self.data)[:60]


class Topic(models.Model):
    name = I18nCharField()
    hint = models.CharField(max_length=60)

    def __str__(self):
        return f'{self.name}'


class Info(models.Model):
    name = I18nCharField()

    def __str__(self):
        return f'{self.name}'


class Card(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    infos = models.ManyToManyField(Info, blank=True)

    name = models.CharField(max_length=180)
    hint = models.CharField(max_length=60, blank=True)

    def __str__(self):
        return f'{self.name}'


class Interaction(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    time = models.DateTimeField(default=timezone.now)

    objects = InteractionManager()

    class Meta:
        abstract = True


class Win(Interaction):
    pass


class Fail(Interaction):
    pass
