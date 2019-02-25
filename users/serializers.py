from django.contrib.auth import authenticate, login
from django.db.utils import IntegrityError
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from users.models import User


class UserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(min_length=6)

    def create(self):
        try:
            user = User.objects.create_user(**self.validated_data)
        except IntegrityError:
            raise ValidationError

        login(self.context['request'], user)

    def login(self):
        user = authenticate(**self.validated_data)

        if user is None:
            raise ValidationError

        login(self.context['request'], user)
