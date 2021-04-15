from django.shortcuts import render

# apis/views.py
from rest_framework import generics

from passengers import models
from .serializers import PassengerSerializer

class ListPassenger(generics.ListCreateAPIView):
    queryset = models.Passenger.objects.all()
    serializer_class = PassengerSerializer


class DetailPassenger(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Passenger.objects.all()
    serializer_class = PassengerSerializer
