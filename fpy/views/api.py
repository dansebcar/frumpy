from random import choices

from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from fpy import serializers, filters
from fpy.models import Dump, Card, Info, Topic, Win, Fail


class SerializerDictMixin:
    serializer_class_dict = {}

    def get_serializer_class(self):
        return self.serializer_class_dict.get(
            self.action,
            self.serializer_class,
        )


class DumpViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    GenericViewSet,
):
    serializer_class = serializers.DumpSerializer
    queryset = Dump.objects.all()


class CardViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    SerializerDictMixin,
    GenericViewSet,
):
    serializer_class = serializers.CardEditSerializer
    serializer_class_dict = {
        'list': serializers.CardSerializer,
        'feed': serializers.CardSerializer,
    }
    permission_classes = [IsAuthenticated]
    filter_backends = [
        filters.TopicFilter,
        filters.ExcludeFilter,
    ]

    def get_queryset(self):
        qs = Card.objects.interactions(
            self.request.user,
        ).select_related(
            'topic',
        )

        if self.action == 'list':
            qs = qs.prefetch_related('infos')

        return qs

    @action(detail=False)
    def feed(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        cards = queryset.weights(request.user).order_by('-weight')[:600]
        if not cards:
            return Response(data="not_found", status=404)

        card, = choices(cards, weights=map(lambda k: k.weight, cards))
        serializer = self.get_serializer(card)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def win(self, request, pk=None):
        Win.objects.create_from_request(request, pk)
        return Response()

    @action(detail=True, methods=['post'])
    def fail(self, request, pk=None):
        Fail.objects.create_from_request(request, pk)
        return Response()


class TopicViewSet(
    mixins.ListModelMixin,
    GenericViewSet,
):
    serializer_class = serializers.TopicSerializer
    permission_classes = [IsAuthenticated]
    queryset = Topic.objects.by_count()
    filter_backends = [filters.I18nSearchFilter, filters.LevelFilter]
    i18n_search_fields = ['name']


class InfoViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    SerializerDictMixin,
    GenericViewSet,
):
    serializer_class = serializers.InfoEditSerializer
    serializer_class_dict = {
        'list': serializers.InfoSerializer,
    }
    permission_classes = [IsAuthenticated]
    queryset = Info.objects.all()
    filter_backends = [
        filters.I18nSearchFilter,
        filters.ExcludeFilter,
    ]
    i18n_search_fields = ['name']
