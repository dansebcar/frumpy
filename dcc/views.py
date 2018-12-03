from rest_framework import mixins, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from dcc.models import Hit
from dcc.serializers import HitSerializer


class HitViewSet(mixins.ListModelMixin, GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = HitSerializer

    @property
    def context(self):
        return {"request": self.request}

    def get_queryset(self):
        return Hit.objects.filter(user=self.request.user)

    def get_uid(self, hits):
        try:
            return hits[0].uid
        except IndexError:
            return None

    def create(self, request):
        serializer = self.serializer_class(data=request.data, many=True, context=self.context)
        if serializer.is_valid(raise_exception=True):
            hits = serializer.save()
            return Response({"uid": self.get_uid(hits)})

    @action(detail=False)
    def pull(self, request):
        uid = request.query_params.get("uid", "")

        try:
            uid = int(uid)
        except ValueError:
            uid = 0

        hits = self.get_queryset().filter(uid__gt=uid)
        serializer = self.serializer_class(hits, many=True)
        return Response(serializer.data)
