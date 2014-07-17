from django.conf.urls import include, url
from rest_framework import routers

from . import views

app_name = 'dictapp'

router = routers.DefaultRouter()
router.register('', views.EntryViewSet, base_name='entry')

urlpatterns = [
    url(r'^entry/', include(router.urls)),
]
