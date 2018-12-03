from django.views.generic.list import ListView

from dcc.models import Hit


class Home(ListView):
    template_name = 'fpy/home.html'
    queryset = Hit.objects.order_by('-time')[:60]
