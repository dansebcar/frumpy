from django.contrib.auth import get_user_model
from django.contrib.postgres.fields import JSONField
from django.db import models

User = get_user_model()


class Entry(models.Model):
    name = models.CharField(max_length=255, unique=True, db_index=True)
    data = JSONField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __repr__(self):
        return f'{self.__class__}: {self.name}'

    def hit(self):
        Hit.objects.create(entry=self)

    class Meta:
        ordering = ('name',)
        verbose_name_plural = 'entries'


class Hit(models.Model):
    entry = models.ForeignKey(
        Entry,
        on_delete=models.CASCADE,
        related_name='hits'
    )
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-time',)
