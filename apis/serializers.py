# apis/serializers.py
from rest_framework import serializers
from passengers import models


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = models.Passenger