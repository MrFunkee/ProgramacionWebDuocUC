from django.shortcuts import render
from .models import Producto, Post
# Create your views here.

def product_list(request):
    productos = Producto.objects.all()
    return render(request,"core/productos2.html",{'productos':productos})

def blog(request):
    posts = Post.objects.all()
    return render(request,"core/index.html", {'posts':posts})

def acerca_de(request):
    return render(request, "core/acerca_de.html")

def index(request):
    return render(request, "core/index.html")

def usermi(request):
    return render(request, "core/usermi.html")

def producto(request):
    return render(request, "core/producto.html")

def contacto(request):
    return render(request, "core/contacto.html")

def inicio_sesion(request):
    return render(request, "core/inicio_sesion.html")

def registro(request):
    return render(request, "core/registro.html")

def en_construccion(request):
    return render(request, "core/en_construccion.html")




