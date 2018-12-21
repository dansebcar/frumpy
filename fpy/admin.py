from django.contrib import admin
from django.forms import ModelForm
from django.utils.translation import get_language_from_request
from i18nfield.forms import I18nTextInput

from fpy.models import Dump, Card, Info, Topic, Win, Fail


class I18nAdmin(admin.ModelAdmin):
    search_fields = [None]

    i18n_search_fields = []
    i18n_widgets = []

    def get_search_fields(self, request):
        lang = get_language_from_request(request)
        return [
            *filter(None, self.search_fields),
            *map(lambda k: f'{k}__{lang}', self.i18n_search_fields),
        ]

    def __init__(self, _model, *args, **kwargs):
        class I18nAdminForm(ModelForm):
            class Meta:
                model = _model
                fields = '__all__'
                widgets = {
                    field: I18nTextInput
                    for field in self.i18n_widgets
                }

        self.form = I18nAdminForm
        super().__init__(_model, *args, **kwargs)


@admin.register(Dump)
class DumpAdmin(admin.ModelAdmin):
    pass


class InteractionInline(admin.TabularInline):
    extra = 0


class WinInline(InteractionInline):
    model = Win


class FailInline(InteractionInline):
    model = Fail


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    autocomplete_fields = ['topic', 'infos']
    search_fields = ['topic', 'infos']
    inlines = [
        WinInline,
        FailInline,
    ]


@admin.register(Info)
class InfoAdmin(I18nAdmin):
    i18n_widgets = ['name']
    i18n_search_fields = ['name']


@admin.register(Topic)
class TopicAdmin(I18nAdmin):
    i18n_widgets = ['name']
    i18n_search_fields = ['name']
