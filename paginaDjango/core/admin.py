from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(tipoUsuario)
admin.site.register(Usuario)
admin.site.register(Cuenta)
admin.site.register(Producto)
admin.site.register(Post)