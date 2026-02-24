from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, GaleriViewSet

# Membuat router otomatis untuk API
router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'galeri', GaleriViewSet)

urlpatterns = [
    path('', include(router.urls)),
]