from django.contrib import admin
from .models import Entry, Hit


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    pass


@admin.register(Hit)
class HitAdmin(admin.ModelAdmin):
    pass
