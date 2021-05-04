from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'passengers'
urlpatterns = [
    path('', TemplateView.as_view(template_name="home.html"), name='home'),
    path('dashboard', TemplateView.as_view(template_name="dashboard.html"), name='dashboard'),
    path('challenge', TemplateView.as_view(template_name="challenge.html"), name='challenge'),
    path('about', TemplateView.as_view(template_name="about.html"), name='about'),
    path('contact', TemplateView.as_view(template_name="contact.html"), name='contact'),
]