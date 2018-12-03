from django.contrib import admin
from dcc.models import Hit


@admin.register(Hit)
class HitAdmin(admin.ModelAdmin):
    pass
