from rest_framework import serializers
from .models import LawyerProfile, Service


class LawyerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = LawyerProfile
        fields = ['name', 'tagline', 'bio', 'phone', 'email', 'address', 'whatsapp']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'icon', 'order']
