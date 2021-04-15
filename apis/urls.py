# apis/urls.py
from django.urls import path

from .views import ListPassenger, DetailPassenger

urlpatterns = [
    path('', ListPassenger.as_view()),
    path('<int:pk>/', DetailPassenger.as_view()),
]