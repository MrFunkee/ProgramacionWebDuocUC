# Generated by Django 3.2.4 on 2021-07-06 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_tipousuario_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='producto',
            fields=[
                ('idProducto', models.CharField(max_length=10, primary_key=True, serialize=False, verbose_name='Código')),
                ('descripcion', models.CharField(max_length=100, verbose_name='Descripción')),
                ('precio', models.IntegerField(verbose_name='Precio Unitario')),
                ('cantidad', models.IntegerField(verbose_name='Stock')),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='productos', verbose_name='Imagen')),
            ],
            options={
                'verbose_name': 'producto',
                'verbose_name_plural': 'productos',
                'ordering': ['descripcion'],
            },
        ),
    ]