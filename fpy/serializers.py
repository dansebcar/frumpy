from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.translation import gettext as _
from i18nfield.strings import LazyI18nString
from rest_framework.fields import Field
from rest_framework import serializers

from fpy.models import Dump, Card, Info, Topic

User = get_user_model()


class I18nField(Field):
    language_codes = dict(settings.LANGUAGES).keys()

    def to_representation(self, value):
        return value.data

    def to_internal_value(self, data):
        if isinstance(data, dict) and data.keys() == self.language_codes:
            return LazyI18nString(data)

        raise serializers.ValidationError(
            _('Not a dict containing all supported languages'),
        )


class DumpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dump
        fields = ['id', 'data', 'created']

    def __init__(self, *args, data=None, **kwargs):
        if data is not None:
            super().__init__(*args, data={'data': data}, **kwargs)
        else:
            super().__init__(*args, **kwargs)


class ContextModelSerializer(serializers.ModelSerializer):
    @property
    def form_context(self):
        context = {}

        for field_name, value in self.data.items():
            field = self.Meta.model._meta.get_field(field_name)
            context[field_name] = {
                'label': str(field.verbose_name),
                'value': value,
            }

        return context


class TopicSerializer(serializers.ModelSerializer):
    level = serializers.CharField(source='get_level_display')

    class Meta:
        model = Topic
        fields = ['id', 'name', 'hint', 'level']


class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ['id', 'name']


class InfoEditSerializer(serializers.ModelSerializer):
    name = I18nField()

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Info
        fields = ['id', 'user', 'name']


class CardContextSerializer(ContextModelSerializer):
    infos = InfoSerializer(many=True)

    class Meta:
        model = Card
        fields = ['id', 'name', 'hint', 'infos']


class CardEditSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Card
        fields = [
            'id',
            'name',
            'hint',
            'topic',
            'infos',
            'user',
        ]


class CardSerializer(serializers.ModelSerializer):
    topic = TopicSerializer()
    infos = InfoSerializer(many=True)

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    user_can_edit = serializers.BooleanField()
    user_win_count = serializers.IntegerField()
    user_fail_count = serializers.IntegerField()
    latest_user_interaction = serializers.DateTimeField()

    class Meta:
        model = Card
        fields = [
            'id',
            'name',
            'hint',
            'topic',
            'user',
            'infos',
            'user_can_edit',
            'user_win_count',
            'user_fail_count',
            'latest_user_interaction',
        ]
