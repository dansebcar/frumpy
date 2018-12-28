from django.urls import path

from fpy.views import auth, site

app_name = 'fpy'

urlpatterns = [
    path(r'', site.App.as_view(), name='home'),
    path(r'topic/<int:topic>/card/', site.CardForm.as_view(), name='card-form'),
    path(r'topics/', site.TopicList.as_view(), name='topic-list'),

    path(r'signup/', auth.SignupView.as_view(), name='signup'),
    path(r'login/', auth.LoginView.as_view(), name='login'),
    path(r'logout/', auth.LogoutView.as_view(), name='logout'),
]
