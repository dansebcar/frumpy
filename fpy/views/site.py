from django.shortcuts import get_object_or_404

from fpy import serializers
from fpy.models import Topic, Card
from fpy.views import WebpackView


class App(WebpackView):
    entry = 'app'


class SignupView(WebpackView):
    entry = 'signup'


class LoginView(WebpackView):
    entry = 'login'


class TopicList(WebpackView):
    entry = 'topics'

    extra_json_context = {
        'levels': Topic.LEVELS,
    }


class CardForm(WebpackView):
    entry = 'card-form'

    @property
    def topic(self):
        topic = get_object_or_404(
            Topic,
            id=self.kwargs['topic'],
        )
        return serializers.TopicSerializer(topic)

    @property
    def card(self):
        card = self.kwargs.get('card')
        if card:
            card = get_object_or_404(
                Card,
                id=card,
            )
        return serializers.CardContextSerializer(card)

    @property
    def extra_json_context(self):
        return {
            'topic': self.topic.data,
            'form': self.card.form_context,
        }
