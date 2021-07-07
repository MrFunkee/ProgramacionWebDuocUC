from django.db import models
from django.utils.timezone import now

# Create your models here.

class tipoUsuario(models.Model):
    idTipoUsuario = models.IntegerField(primary_key=True,verbose_name='Id')
    tipoUsuario = models.CharField(max_length=50,verbose_name='Tipo Usuario')

    class Meta:
        verbose_name = 'tipo de usuario'
        verbose_name_plural ='tipos de usuarios'
        ordering = ["idTipoUsuario"]

    def __str__(self):
        return self.tipoUsuario

class Usuario(models.Model):
    idUsuario = models.IntegerField(primary_key= True,verbose_name='Id')
    nombreUsuario = models.CharField(max_length=50,verbose_name='Nombre') 
    apellidoUsuario =models.CharField(max_length=50, verbose_name='Apellido')
    email = models.EmailField(max_length=100,verbose_name='Email')
    rut = models.IntegerField(unique=True,verbose_name='Rut')  

    class Meta:
        verbose_name = 'usuario'
        verbose_name_plural ='usuarios'
        ordering = ["idUsuario"]

    def __str__(self):
        return self.tipoUsuario

class Cuenta(models.Model):
    idCuenta = models.IntegerField(primary_key=True,verbose_name='Id')
    password = models.CharField(max_length=100,verbose_name='Contraseña')
    comentario = models.TextField(max_length=150,verbose_name='Comentario')
    tipoUsuario = models.ForeignKey(tipoUsuario,on_delete=models.CASCADE)
    Usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'cuenta'
        verbose_name_plural ='cuentas'
        ordering = ["idCuenta"]

    def __str__(self):
        return self.tipoUsuario


class Producto(models.Model):
    idProducto = models.CharField(primary_key=True, max_length=10,verbose_name='Código')
    descripcion = models.CharField(max_length=100,verbose_name='Descripción')
    precio = models.IntegerField(verbose_name='Precio Unitario')
    cantidad = models.IntegerField(verbose_name='Stock')
    imagen = models.ImageField(verbose_name='Imagen',upload_to='productos',null=True,blank=True)
    

    class Meta:
            verbose_name = 'producto'
            verbose_name_plural = 'productos'
            ordering = ["descripcion"]

    def __str__(self):
            return self.descripcion

class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    content = models.TextField(verbose_name="Contenido")
    published = models.DateTimeField(verbose_name="Fecha publicación", default=now)
    image = models.ImageField(verbose_name="Imagen", upload_to="blog", null=True, blank = True)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha edición")

    class Meta:
        verbose_name = "post"
        verbose_name_plural = "posts"
        ordering = ['-created']

    def __str__(self):
        return self.title