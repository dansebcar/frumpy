from django.db.models.aggregates import Count, Max
from django.views.generic.list import ListView
from rest_framework import viewsets, permissions

from .models import Entry
from .serializers import EntrySerializer


class EntryList(ListView):
    model = Entry
    queryset = (
        Entry.objects.all()
        .annotate(num_hits=Count('hits'), last_hit=Max('hits__time'))
        .order_by('-last_hit')
    )[:20]


class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)
