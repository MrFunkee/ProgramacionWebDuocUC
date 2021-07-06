# Generated by Django 3.2.4 on 2021-07-01 22:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tipoUsuario',
            fields=[
                ('idTipoUsuario', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id')),
                ('tipoUsuario', models.CharField(max_length=50, verbose_name='Tipo Usuario')),
            ],
            options={
                'verbose_name': 'tipo de suario',
                'verbose_name_plural': 'tipos de usuarios',
                'ordering': ['idTipoUsuario'],
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('idUsuario', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id')),
                ('nombreUsuario', models.CharField(max_length=50, verbose_name='Nombre')),
                ('apellidoUsuario', models.CharField(max_length=50, verbose_name='Apellido')),
                ('email', models.EmailField(max_length=100, verbose_name='Email')),
                ('rut', models.IntegerField(unique=True, verbose_name='Rut')),
            ],
            options={
                'verbose_name': 'usuario',
                'verbose_name_plural': 'usuarios',
                'ordering': ['idUsuario'],
            },
        ),
        migrations.CreateModel(
            name='Cuenta',
            fields=[
                ('idCuenta', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id')),
                ('password', models.CharField(max_length=100, verbose_name='Contraseña')),
                ('comentario', models.TextField(max_length=150, verbose_name='Comentario')),
                ('Usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.usuario')),
                ('tipoUsuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.tipousuario')),
            ],
            options={
                'verbose_name': 'cuenta',
                'verbose_name_plural': 'cuentas',
                'ordering': ['idCuenta'],
            },
        ),
    ]