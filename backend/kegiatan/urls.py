from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, GaleriViewSet, RekomendasiBukuViewSet

# Membuat router otomatis untuk API
router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'galeri', GaleriViewSet)
router.register(r'rekomendasi', RekomendasiBukuViewSet)

urlpatterns = [
    path('', include(router.urls)),
]