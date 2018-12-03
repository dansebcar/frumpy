from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from fpy.models import Dump
from fpy.serializers import DumpSerializer


class DumpViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    GenericViewSet,
):
    serializer_class = DumpSerializer
    queryset = Dump.objects.all()
