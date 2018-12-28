from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView

from fpy import serializers
from fpy.models import Topic


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
    def fields(self):
        meta = serializers.CardEditSerializer.Meta
        for name in meta.fields:
            field = meta.model._meta.get_field(name)
            yield [
                name,
                {
                    'label': field.verbose_name,
                },
            ]

    @property
    def extra_json_context(self):
        return {
            'topic': self.topic.data,
            'fields': dict(self.fields),
        }
