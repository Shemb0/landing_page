from django.urls import path
from .views import LawyerProfileView, ServiceListCreateView, ServiceDetailView

urlpatterns = [
    path('profile/', LawyerProfileView.as_view(), name='lawyer-profile'),
    path('services/', ServiceListCreateView.as_view(), name='service-list'),
    path('services/<int:pk>/', ServiceDetailView.as_view(), name='service-detail'),
]
