from django.contrib.auth import get_user_model
from django.contrib.postgres.fields.jsonb import JSONField
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from i18nfield.fields import I18nTextField

from fpy import managers, validators

User = get_user_model()


class TimeStampedModel(models.Model):
    created = models.DateTimeField(default=timezone.now)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created']


class Dump(TimeStampedModel):
    data = JSONField()

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return str(self.data)[:60]


class Topic(models.Model):
    LEVELS = [
        ('A1', _('A1 Breakthrough')),
        ('A2', _('A2 Waystage')),
        ('B1', _('B1 Threshold')),
        ('B2', _('B2 Vantage')),
        ('C1', _('C1 Proficiency')),
        ('C2', _('C2 Mastery')),
    ]

    name = I18nTextField(_('name'))
    hint = models.TextField(_('hint'), blank=True)
    level = models.CharField(_('level'), max_length=2, choices=LEVELS)

    objects = managers.TopicSet.as_manager()

    def __str__(self):
        return f'{self.name}'

    class Meta:
        ordering = ['id']


class Info(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    name = I18nTextField(_('name'))

    def __str__(self):
        return f'{self.name}'


class Card(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    infos = models.ManyToManyField(Info, blank=True)

    name = models.TextField(_('name'), validators=[validators.card_name])
    hint = models.TextField(_('hint'), blank=True)

    objects = managers.CardSet.as_manager()

    def __str__(self):
        return f'{self.name}'


class Interaction(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    time = models.DateTimeField(default=timezone.now)

    objects = managers.InteractionManager()

    class Meta:
        abstract = True


class Win(Interaction):
    pass


class Fail(Interaction):
    pass
