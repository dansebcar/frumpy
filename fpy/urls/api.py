from django.urls import path
from django.urls.conf import include
from rest_framework import routers

from fpy.views import api

app_name = 'fpy'

router = routers.DefaultRouter()
router.register('dump', api.DumpViewSet, base_name='dump')
router.register('card', api.CardViewSet, base_name='card')
router.register('topic', api.TopicViewSet, base_name='topic')
router.register('info', api.InfoViewSet, base_name='info')

urlpatterns = [
    path(r'api/v1/', include(router.urls)),
]
