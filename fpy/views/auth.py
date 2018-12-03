from django.contrib.auth import get_user_model, login, views
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic.edit import FormView

User = get_user_model()


class SignupView(FormView):
    form_class = UserCreationForm
    template_name = 'registration/login.html'
    success_url = reverse_lazy('fpy:home')

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return super().form_valid(form)


class LoginView(views.LoginView):
    redirect_authenticated_user = True


class LogoutView(views.LogoutView):
    pass
