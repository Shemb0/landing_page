from django.db import models


class LawyerProfile(models.Model):
    name = models.CharField('Nombre', max_length=200, default='...')
    tagline = models.CharField('Eslogan', max_length=300, default='...')
    bio = models.TextField('Presentacion', default='...')
    phone = models.CharField('Telefono', max_length=50, default='...')
    email = models.EmailField('Email', default='contacto@ejemplo.com')
    address = models.CharField('Direccion', max_length=300, default='...')
    whatsapp = models.CharField('WhatsApp', max_length=50, blank=True, default='')

    class Meta:
        verbose_name = 'Perfil del Abogado'
        verbose_name_plural = 'Perfil del Abogado'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Singleton: solo permite una instancia
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class Service(models.Model):
    title = models.CharField('Titulo', max_length=200)
    description = models.TextField('Descripcion')
    icon = models.CharField('Icono', max_length=10, default='⚖️')
    order = models.PositiveIntegerField('Orden', default=0)

    class Meta:
        verbose_name = 'Servicio'
        verbose_name_plural = 'Servicios'
        ordering = ['order', 'id']

    def __str__(self):
        return self.title
