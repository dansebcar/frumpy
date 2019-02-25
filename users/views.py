from rest_framework.views import APIView
from rest_framework.response import Response

from users.serializers import UserSerializer


class AuthView(APIView):
    http_method_names = ['post']

    def post(self, request):
        serializer = UserSerializer(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        self.perform(serializer)
        return Response(status=204)


class RegisterView(AuthView):
    def perform(self, serializer):
        serializer.create()


class LoginView(AuthView):
    def perform(self, serializer):
        serializer.login()
