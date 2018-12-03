from django.conf.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', include('fpy.urls', namespace='fpy')),
    path('dcc/', include('dcc.urls', namespace='dcc')),
    path('admin/', admin.site.urls),
]
