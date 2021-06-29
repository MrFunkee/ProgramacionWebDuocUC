from django.urls import path
from .views import *

urlpatterns = [
    path('', index , name='index'),
    path('acerca_de/', acerca_de , name='acerca_de'),
]

