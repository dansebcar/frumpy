from django.views.generic import TemplateView


class WebpackView(TemplateView):
    template_name = 'base.html'

    @property
    def extra_json_context(self):
        return {}

    @property
    def extra_context(self):
        return {
            'webpack': {
                ext: f'{self.entry}.{ext}'
                for ext in ['css', 'js']
            },
            'extra_json_context': self.extra_json_context,
        }
