from django.db import models

# Create your models here.

class tipoUsuario(models.Model):
    idTipoUsuario = models.IntegerField(primary_key=True,verbose_name='Id')
    tipoUsuario = models.CharField(max_length=50,verbose_name='Tipo Usuario')

    class Meta:
        verbose_name = 'tipo de suario'
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