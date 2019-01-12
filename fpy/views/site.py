from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView

from fpy import serializers
from fpy.models import Topic, Card


class WebpackView(TemplateView):
    template_name = 'base.html'

    @property
    def extra_json_context(self):
        return {}

    @property
    def extra_context(self):
        return {
            'webpack': {
                ext: f'{self.entry}.{ext}'
                for ext in ['css', 'js']
            },
            'extra_json_context': self.extra_json_context,
        }


class App(WebpackView):
    entry = 'app'


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
