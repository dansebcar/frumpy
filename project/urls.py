from django.conf.urls import include
from django.contrib import admin
from django.urls import path

import dictapp.views as views

urlpatterns = [
    path('', views.EntryList.as_view(), name='entry-list'),
    path('api/', include('dictapp.urls', namespace='api')),
    path('admin/', admin.site.urls),
    path('registration/', include('register.urls', namespace='register')),
]
