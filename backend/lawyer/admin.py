from django.contrib import admin
from .models import LawyerProfile, Service


@admin.register(LawyerProfile)
class LawyerProfileAdmin(admin.ModelAdmin):
    fields = ['name', 'tagline', 'bio', 'phone', 'email', 'address', 'whatsapp']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon', 'order']
    ordering = ['order']
