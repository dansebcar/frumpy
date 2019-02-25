from django.conf import settings
from django.utils.translation import gettext as _, get_language


class Page:
    def __init__(self, request):
        self.request = request

    def __call__(self, page):
        label, name = page

        return {
            'label': label,
            'name': name,
            'current': self.name == name,
        }

    @property
    def name(self):
        return self.request.resolver_match.view_name


class ContextProcessor:
    @property
    def is_auth(self):
        return self.request.user.is_authenticated

    @property
    def full_path(self):
        return self.request.get_full_path()

    @property
    def lang(self):
        return get_language()

    @property
    def language_links(self):
        for code, label in settings.LANGUAGES:
            yield {
                'code': code,
                'label': label,
                'current': code == self.lang,
                'path': self.i18n_path(code),
            }

    @property
    def auth_pages(self):
        if self.is_auth:
            return [
                (_('Topics'), 'fpy:topic-list'),
                (_('Logout'), 'fpy:logout'),
            ]

        return [
            (_('Login'), 'fpy:login'),
            (_('Signup'), 'fpy:signup'),
        ]

    def i18n_path(self, code):
        return self.full_path.replace(self.lang, code, 1)

    def __call__(self, request):
        self.request = request

        return {
            'language_links': self.language_links,
            'pages': map(
                Page(request),
                [
                    (_('Home'), 'site:home'),
                    *self.auth_pages,
                ],
            ),
            'json_context': {
                'isAuthenticated': self.is_auth,
                'availableLanguages': dict(settings.LANGUAGES),
            },
        }


context_processor = ContextProcessor()
