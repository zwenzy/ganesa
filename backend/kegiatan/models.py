from django.db import models

# Create your models here.
class Event(models.Model):
    judul = models.CharField(max_length=200)
    deskripsi = models.TextField(help_text="Tuliskan detail acara di sini")
    poster = models.ImageField(upload_to='posters/', blank=True, null=True)
    tanggal = models.DateTimeField(help_text="Tanggal dan jam acara")
    is_active = models.BooleanField(default=True, help_text="Centang jika acara masih akan datang")

    def __str__(self):
        return self.judul

class Galeri(models.Model):
    event = models.ForeignKey(Event, on_delete=models.SET_NULL, null=True, blank=True, help_text="Pilih event yang berkaitan (opsional)")
    foto = models.ImageField(upload_to='galeri/')
    caption = models.CharField(max_length=255, blank=True)
    tanggal_upload = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.caption if self.caption else f"Foto {self.id}"