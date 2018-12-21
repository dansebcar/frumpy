from django.urls import path
from django.urls.conf import include
from rest_framework import routers

from fpy.views import api, auth, site

app_name = 'fpy'

router = routers.DefaultRouter()
router.register('dump', api.DumpViewSet, base_name='dump')
router.register('info', api.InfoViewSet, base_name='info')
router.register('card', api.CardViewSet, base_name='card')

urlpatterns = [
    path(r'', site.Home.as_view(), name='home'),
    path(r'api/v1/', include(router.urls)),

    path(r'signup/', auth.SignupView.as_view(), name='signup'),
    path(r'login/', auth.LoginView.as_view(), name='login'),
    path(r'logout/', auth.LogoutView.as_view(), name='logout'),
]
