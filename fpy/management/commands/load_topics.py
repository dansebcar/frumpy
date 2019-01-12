from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import transaction
import yaml

from fpy.models import Topic, Card

User = get_user_model()


class Command(BaseCommand):
    def handle(self, **options):
        with open(f'{settings.BASE_DIR}/fpy/fixtures/topic.yaml') as f:
            topics = yaml.load(f)

        user = User.objects.first()

        with transaction.atomic():
            for index, topic in enumerate(topics, start=1):
                card = topic.pop('card')

                topic, _ = Topic.objects.update_or_create(
                    defaults=topic,
                    id=index,
                )

                card.update(topic=topic, user=user)

                Card.objects.update_or_create(
                    defaults=card,
                    id=index,
                )
