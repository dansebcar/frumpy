from rest_framework import serializers

from fpy.models import Dump, Card, Info


class DumpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dump
        fields = ['id', 'data', 'created']

    def __init__(self, *args, data=None, **kwargs):
        if data is not None:
            return super().__init__(*args, data={'data': data}, **kwargs)

        return super().__init__(*args, **kwargs)


class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ['id', 'name']


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = [
            'id',
            'name',
            'hint',
            'topic',
            'user',
            'infos',
        ]

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
