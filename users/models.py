from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields.citext import CITextField


class User(AbstractUser):
    username = CITextField(unique=True)
