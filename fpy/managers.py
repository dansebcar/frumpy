from datetime import timedelta

from django.db.models import (
    Case, Count, F,
    FilteredRelation, FloatField, Manager, Q, QuerySet, When
)
from django.db.models.aggregates import Max
from django.db.models.functions import Cast, Greatest
from django.utils import timezone


class TopicSet(QuerySet):
    def by_count(self):
        return self.annotate(
            card_count=Count('card'),
        ).order_by('-card')


class CardSet(QuerySet):
    def interactions(self, user=None):
        return self.annotate(
            user_win=FilteredRelation('win', condition=Q(win__user=user)),
            user_fail=FilteredRelation('fail', condition=Q(fail__user=user)),
            user_win_count=Cast(Count('user_win'), output_field=FloatField()),
            user_fail_count=Cast(Count('user_fail'), output_field=FloatField()),
            user_interaction_count=F('user_win_count') + F('user_fail_count'),
            latest_user_interaction=Greatest(
                Max('user_win__time'),
                Max('user_fail__time'),
            ),
        )

    def weights(self, user=None):
        min_interaction = timezone.now() - timedelta(days=1)

        return self.filter(
            Q(latest_user_interaction=None) | Q(latest_user_interaction__lt=min_interaction),
        ).annotate(
            weight=Case(
                When(
                    user_interaction_count=0,
                    then=1,
                ),
                default=(F('user_fail_count') + 1) / (F('user_interaction_count') + 1),
            ),
        )


class InteractionManager(Manager):
    def create_from_request(self, request_or_user, card_pk):
        try:
            user = request_or_user.user
        except AttributeError:
            user = request_or_user
        return self.create(user=user, card_id=card_pk)
