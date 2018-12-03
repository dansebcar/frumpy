from rest_framework import serializers

from dcc.models import Hit


class HitSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Hit
        fields = ["uid", "entry", "time", "user"]
