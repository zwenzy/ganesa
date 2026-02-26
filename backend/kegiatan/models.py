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
    
class RekomendasiBuku(models.Model):
    judul = models.CharField(max_length=255)
    penulis = models.CharField(max_length=255)
    # Kita sediakan 2 opsi cover: pakai URL dari LibraryThing atau upload gambar lokal
    cover_url = models.URLField(blank=True, null=True, help_text="Link gambar dari LibraryThing (opsional)")
    cover_lokal = models.ImageField(upload_to='covers/', blank=True, null=True, help_text="Upload gambar jika tidak ada link")
    ulasan = models.TextField(help_text="Deskripsi singkat atau alasan pustakawan merekomendasikan buku ini")
    tanggal_ditambahkan = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Memastikan data yang ditarik selalu berurutan dari yang paling baru dimasukkan
        ordering = ['-tanggal_ditambahkan']

    def __str__(self):
        return self.judul