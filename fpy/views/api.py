from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from fpy.models import Dump, Card, Info, Win, Fail
from fpy import serializers


class DumpViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    GenericViewSet,
):
    serializer_class = serializers.DumpSerializer
    queryset = Dump.objects.all()


class InfoViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    GenericViewSet,
):
    serializer_class = serializers.InfoSerializer
    permission_classes = [IsAuthenticated]
    queryset = Info.objects.all()


class CardViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    GenericViewSet,
):
    serializer_class = serializers.CardSerializer
    permission_classes = [IsAuthenticated]
    queryset = Card.objects.all()

    @action(detail=False)
    def feed(self, request):
        card = Card.objects.first()
        serializer = self.serializer_class(card)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def win(self, request, pk=None):
        Win.objects.create_from_request(request, pk)
        return Response()

    @action(detail=True, methods=['post'])
    def fail(self, request, pk=None):
        Fail.objects.create_from_request(request, pk)
        return Response()
