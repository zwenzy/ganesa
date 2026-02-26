from rest_framework import serializers
from .models import Event, Galeri, RekomendasiBuku

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'  # Mengambil semua kolom di tabel Event

class GaleriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Galeri
        fields = '__all__'

class RekomendasiBukuSerializer(serializers.ModelSerializer):
    class Meta:
        model = RekomendasiBuku
        fields = '__all__'