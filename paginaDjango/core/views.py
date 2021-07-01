from django.shortcuts import render

# Create your views here.
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

en_construccion