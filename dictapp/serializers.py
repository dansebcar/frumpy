from rest_framework import serializers

from .models import Entry, Hit


class HitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hit
        fields = ('time',)


class EntrySerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    hits = HitSerializer(many=True, required=False)

    class Meta:
        model = Entry
        fields = ('name', 'data', 'user', 'hits')

    def create(self, validated_data):
        try:
            entry = Entry.objects.get(name=validated_data['name'])
            self.update(entry, validated_data)
        except Entry.DoesNotExist:
            entry = super().create(validated_data)
        entry.hit()
        return entry
