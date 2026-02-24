from rest_framework import viewsets
from .models import Event, Galeri
from .serializers import EventSerializer, GaleriSerializer

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    # Cuma nampilin event yang masih aktif, diurutkan dari yang terdekat
    queryset = Event.objects.filter(is_active=True).order_by('tanggal')
    serializer_class = EventSerializer

class GaleriViewSet(viewsets.ReadOnlyModelViewSet):
    # Nampilin foto galeri, dari yang paling baru di-upload
    queryset = Galeri.objects.all().order_by('-tanggal_upload')
    serializer_class = GaleriSerializer