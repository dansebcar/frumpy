from django.contrib.auth import get_user_model
import factory
from factory.django import DjangoModelFactory

from dictapp.models import Entry

User = get_user_model()


class UserFactory(DjangoModelFactory):
    username = factory.Sequence(lambda n: f'user_{n}')
    password = '123'

    class Meta:
        model = User


class EntryFactory(DjangoModelFactory):
    name = factory.Sequence(lambda n: f'entry_{n}')
    data = {'key': 'value'}
    user = factory.SubFactory(UserFactory)

    class Meta:
        model = Entry
