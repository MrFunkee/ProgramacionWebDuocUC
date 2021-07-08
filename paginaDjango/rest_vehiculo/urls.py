from django.urls import path
from rest_vehiculo.views import lista_productos, lista_empleados

urlpatterns = [
    path('lista_productos', lista_productos, name='lista_productos'),
    path('lista_empleados', lista_empleados, name='lista_empleados'),
]