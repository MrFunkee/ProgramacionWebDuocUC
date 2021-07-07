from django.urls import path
from .views import *

urlpatterns = [
    path('', blog , name='index'),
    path('acerca_de/', acerca_de , name='acerca_de'),
    path('producto/', producto , name='producto'),
    path('usermi/', usermi , name='usermi'),
    path('contacto/', contacto , name='contacto'),
    path('inicio_sesion/', inicio_sesion , name='inicio_sesion'),
    path('registro/', registro , name='registro'),
    path('en_construccion/', en_construccion , name='en_construccion'),
    path('productos2/', product_list, name='product-list'),
]

