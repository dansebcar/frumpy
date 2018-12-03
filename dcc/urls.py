from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from dcc import views

app_name = 'dcc'

router = routers.DefaultRouter()
router.register('', views.HitViewSet, base_name='hits')

urlpatterns = [
    path(r'hits/', include(router.urls)),
]
