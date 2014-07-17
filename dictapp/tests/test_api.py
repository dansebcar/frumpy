from django.urls import reverse
from django.test import TestCase

from .factories import UserFactory, EntryFactory


class EntryViewSetMixin:
    def reverse(self, name='list', kwargs={}):
        return reverse(f'api:entry-{name}', kwargs=kwargs)

    def setUp(self):
        self.entry = EntryFactory()
        self.other_user = UserFactory()


class ViewTests(EntryViewSetMixin, TestCase):
    def test_list_authorized(self):
        self.client.force_login(self.entry.user)

        response = self.client.get(self.reverse())

        self.assertEqual(response.status_code, 200)

        self.assertListEqual(
            [result['name'] for result in response.json()],
            [self.entry.name]
        )

    def test_list_unauthorized(self):
        response = self.client.get(self.reverse())

        self.assertEqual(response.status_code, 401)

    def test_list_empty_other_user(self):
        self.client.force_login(self.other_user)

        response = self.client.get(self.reverse())

        self.assertEqual(response.status_code, 200)
        self.assertListEqual(response.json(), [])
