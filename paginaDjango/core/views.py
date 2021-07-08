from django.shortcuts import render,redirect,reverse
from .models import Producto, Post
from .forms import productoForm
# Create your views here.

def listaProducto(request):
    productos = Producto.objects.all()
    return render(request,"core/producto.html",{'productos':productos})

def eliminarProducto(request,idProducto):
    productoEliminar = Producto.objects.get(idProducto = idProducto)
    productoEliminar.delete()
    return redirect(to="producto")

def blog(request):
    posts = Post.objects.all()
    return render(request,"core/index.html", {'posts':posts})

def acerca_de(request):
    return render(request, "core/acerca_de.html")

def index(request):
    return render(request, "core/index.html")

def usermi(request):
    return render(request, "core/usermi.html")


def contacto(request):
    return render(request, "core/contacto.html")

def inicio_sesion(request):
    return render(request, "core/inicio_sesion.html")

def registro(request):
    return render(request, "core/registro.html")

def en_construccion(request):
    return render(request, "core/en_construccion.html")


def modificarProducto(request,idProducto):

    producto = Producto.objects.get(idProducto = idProducto)
    form = productoForm(instance = producto)

    if request.method == 'POST':
        form = productoForm(request.POST,request.FILES,instance=producto)
        if form.is_valid():
            form.save()                
            return redirect(reverse('producto')+ "?ok")
        else:
            return redirect(reverse('modificarProducto')+ idProducto)

    return render(request,'core/modificarProducto.html',{'form':form})


def acerca_de2(request):
    return render(request, "core/acerca_de2.html")


