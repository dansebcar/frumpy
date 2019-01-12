from django.conf import settings
from django.utils.translation import get_language
from rest_framework.filters import BaseFilterBackend

search_param = settings.REST_FRAMEWORK['SEARCH_PARAM']


class SimpleFilterBackend(BaseFilterBackend):
    field = None

    @property
    def value(self):
        return self.request.query_params.get(self.field)

    def filter_queryset(self, *args):
        self.request, self.queryset, self.view = args
        result = self.filter()
        if result is not None:
            return result
        return self.queryset


class FieldFilter(SimpleFilterBackend):
    field = None

    @property
    def kwargs(self):
        if self.value:
            return {self.field: self.value}

    def filter(self):
        if self.kwargs:
            return self.queryset.filter(**self.kwargs)


class TopicFilter(FieldFilter):
    field = 'topic'

    @property
    def kwargs(self):
        value = super().value
        if value:
            try:
                value = int(value)
            except ValueError:
                return {'topic__level': value}

            return {'topic': value}


class LevelFilter(FieldFilter):
    field = 'level'


class I18nSearchFilter(FieldFilter):
    field = search_param

    @property
    def kwargs(self):
        lang = get_language()
        fields = getattr(self.view, 'i18n_search_fields', [])
        return {
            f'{field}__{lang}__icontains': self.value
            for field in fields
        }


class ExcludeFilter(SimpleFilterBackend):
    field = 'exclude'

    @property
    def value(self):
        value = super().value
        if value:
            return value.split('-')

    def filter(self):
        if self.value:
            return self.queryset.exclude(id__in=self.value)
