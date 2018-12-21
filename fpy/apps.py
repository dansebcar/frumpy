from django.apps import AppConfig


class FpyConfig(AppConfig):
    name = 'fpy'

    def ready(self):
        import fpy.lookups
