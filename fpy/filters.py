from django.conf import settings
from django.utils.translation import get_language
from rest_framework.filters import BaseFilterBackend

search_param = settings.REST_FRAMEWORK['SEARCH_PARAM']


class FieldFilter(BaseFilterBackend):
    field = None

    def filter_queryset(self, request, queryset, view):
        value = request.query_params.get(self.field)

        if value:
            return queryset.filter(**{self.field: value})

        return queryset


class TopicFilter(FieldFilter):
    field = 'topic'


class LevelFilter(FieldFilter):
    field = 'level'


class ExcludeFilter(BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        exclude = request.query_params.get('exclude')

        if exclude:
            exclude = exclude.split('-')
            return queryset.exclude(id__in=exclude)

        return queryset


class I18nSearchFilter(BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        lang = get_language()
        search = request.query_params.get(search_param, '')
        fields = getattr(view, 'i18n_search_fields', [])
        return queryset.filter(
            **{
                f'{field}__{lang}__icontains': search
                for field in fields
            },
        )
