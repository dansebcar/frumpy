from rest_framework.serializers import ModelSerializer

from fpy.models import Dump


class DumpSerializer(ModelSerializer):
    class Meta:
        model = Dump
        fields = ['id', 'data', 'created']

    def __init__(self, *args, data=None, **kwargs):
        if data:
            return super().__init__(*args, data={'data': data}, **kwargs)
        
        return super().__init__(*args, **kwargs)
