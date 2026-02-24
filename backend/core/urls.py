from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Ini rute API buatan kita
    path('api/kegiatan/', include('kegiatan.urls')),
]

# Ini wajib agar foto poster yang di-upload bisa diakses link-nya
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)