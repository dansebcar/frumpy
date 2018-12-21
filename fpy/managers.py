from django.db.models import Manager


class InteractionManager(Manager):
    def create_from_request(self, request, card_pk):
        return self.create(user=request.user, card_id=card_pk)
