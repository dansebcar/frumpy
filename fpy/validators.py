from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _


def card_name(value):
    left, right = '[]'
    count = 0

    while value:
        index = value.find(left)
        if index == -1:
            break
        value = value[index:]

        index = value.find(right)
        if index == -1:
            raise ValidationError(_('Contains unmatched opening bracket'))
        value = value[index:]

        count += 1

    if not count:
        raise ValidationError(_('Does not contain brackets'))
