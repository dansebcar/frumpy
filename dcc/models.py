from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Hit(models.Model):
    uid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    entry = models.IntegerField()
    time = models.DateTimeField()
