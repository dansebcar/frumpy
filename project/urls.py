from django.conf.urls import include
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.urls import path

urlpatterns = [
    *i18n_patterns(
        path('', include('fpy.urls.site', namespace='site')),
    ),
    path('api/v1/', include('fpy.urls.api', namespace='fpy')),
    path('api/v1/', include('users.urls', namespace='users')),
    path('dcc/', include('dcc.urls', namespace='dcc')),
    path('admin/', admin.site.urls),
]
