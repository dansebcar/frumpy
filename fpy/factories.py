import random as rnd

from django.conf import settings
from django.contrib.auth import get_user_model
from factory.django import DjangoModelFactory
from factory import post_generation, Iterator, LazyFunction, Sequence

from fpy.models import Card, Info, Topic

User = get_user_model()


def i18n(string):
    return lambda k: {
        lang: string % (lang, k) for lang, _ in settings.LANGUAGES
    }


class CardNameGenerator:
    components = [
        ['Wir fahren', 'Du gehst'],
        ['[nach] Italien', '[an den] Neusiedler See', '[zum] Zahnartzt'],
    ]

    def __call__(self):
        return ' '.join(rnd.choice(k) for k in self.components)


class TopicFactory(DjangoModelFactory):
    name = Sequence(i18n('Topic %s-%s'))

    class Meta:
        model = Topic


class InfoFactory(DjangoModelFactory):
    user = Iterator(User.objects.all())

    name = Sequence(i18n('Info %s-%s'))

    class Meta:
        model = Info


class CardFactory(DjangoModelFactory):
    topic = Iterator(Topic.objects.all())
    user = Iterator(User.objects.all())

    name = LazyFunction(CardNameGenerator())

    class Meta:
        model = Card

    @post_generation
    def infos(self, *args, **kwargs):
        for info in Info.objects.order_by('?')[:rnd.randint(0, 2)]:
            self.infos.add(info)
        for _ in range(rnd.randint(0, 2)):
            self.infos.add(InfoFactory())


class UserFactory(DjangoModelFactory):
    username = Sequence(lambda k: f'user {k}')

    class Meta:
        model = User
