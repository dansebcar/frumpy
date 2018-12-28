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
            return super().__init__(*args, data={'data': data}, **kwargs)

        return super().__init__(*args, **kwargs)


class TopicSerializer(serializers.ModelSerializer):
    level = serializers.CharField(source='get_level_display')
    card_count = serializers.IntegerField()

    class Meta:
        model = Topic
        fields = ['id', 'name', 'hint', 'level', 'card_count']


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


class CardEditSerializer(serializers.ModelSerializer):
    topic = serializers.PrimaryKeyRelatedField(queryset=Topic.objects.all())
    infos = serializers.PrimaryKeyRelatedField(queryset=Info.objects.all(), many=True)

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
            'user_win_count',
            'user_fail_count',
            'latest_user_interaction',
        ]
