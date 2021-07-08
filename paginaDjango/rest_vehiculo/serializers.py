from rest_framework import serializers
from core.models import Producto, Empleado

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ['idProducto','descripcion','precio', 'cantidad', 'imagen']

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['idEmpleado','nombreEmpleado','descripcion', 'imagen']

