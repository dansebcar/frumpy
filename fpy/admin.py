from django.contrib import admin

from fpy.models import Dump

@admin.register(Dump)
class DumpAdmin(admin.ModelAdmin):
    pass
