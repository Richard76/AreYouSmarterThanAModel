# apis/serializers.py
from rest_framework import serializers
from passengers import models


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'age',
            'passenger_class',
        )
        model = models.Passenger