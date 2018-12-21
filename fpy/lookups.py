from django.conf import settings
from django.db.models import Transform
from i18nfield.fields import I18nCharField, I18nTextField


class I18nTransform(Transform):
    def __init__(self, *args, **kwargs):
        self.template = f"%(expressions)s::json->>'{self.lookup_name}'"
        super().__init__(*args, **kwargs)


for lang, _ in settings.LANGUAGES:
    class Lookup(I18nTransform):
        lookup_name = lang

    for field in [I18nCharField, I18nTextField]:
        field.register_lookup(Lookup)
