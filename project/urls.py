from django.conf.urls import include
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', include('fpy.urls.api', namespace='api')),
    *i18n_patterns(
        path('', include('fpy.urls.site', namespace='fpy')),
    ),
    path('dcc/', include('dcc.urls', namespace='dcc')),
    path('admin/', admin.site.urls),
]
