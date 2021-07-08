from django.shortcuts import render,redirect,reverse
from .models import Producto, Post
from .forms import *
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
            return redirect(reverse('producto')+ "?upd")
        else:
            return redirect(reverse('modificar')+ idProducto)

    return render(request,'core/modificarProducto.html',{'form':form})


def agregarProducto(request):         
    if request.method == 'POST':
        form = productoForm(request.POST or None,request.FILES or None)
        if form.is_valid():
            idProducto = form.cleaned_data.get("idProducto")
            descripcion = form.cleaned_data.get("descripcion")
            precio = form.cleaned_data.get("precio")
            cantidad = form.cleaned_data.get("cantidad")
            imagen = form.cleaned_data.get("imagen")
            obj = Producto.objects.create(
                idProducto=idProducto,
                descripcion=descripcion,
                precio=precio,
                cantidad=cantidad,
                imagen=imagen
            )
            obj.save()            
            return redirect(reverse('producto')+ "?ok")
        else:
            return redirect(reverse('agregar')+ "?fail")
    else:
        form = productoForm()

    return render(request,'core/agregarProducto.html',{'form':form})

def agregarPost(request):         
    if request.method == 'POST':
        form =  blogForm(request.POST or None,request.FILES or None)
        if form.is_valid():
            title = form.cleaned_data.get("title")
            content = form.cleaned_data.get("content")
            image = form.cleaned_data.get("image")
            obj = Post.objects.create(
                tittle=title,
                content=content,
                image=image
            )
            obj.save()            
            return redirect(reverse('articulo')+ "?ok")
        else:
            return redirect(reverse('agregarPost')+ "?fail")
    else:
        form = blogForm()

    return render(request,'core/agregarArticulo.html',{'form':form})

def listaPost(request):
    productos = Post.objects.all()
    return render(request,"core/confiPost.html",{'post':productos})

def eliminarPost(request,tittle):
    productoEliminar = Post.objects.get(tittle = tittle)
    productoEliminar.delete()
    return redirect(to="articulos")

def modificarPost(request,title):

    producto = Post.objects.get(title = title)
    form = blogForm(instance = producto)

    if request.method == 'POST':
        form = blogForm(request.POST,request.FILES,instance=producto)
        if form.is_valid():
            form.save()                
            return redirect(reverse('producto')+ "?upd")
        else:
            return redirect(reverse('modificar')+ title)

    return render(request,'core/modificarArticulo.html',{'form':form})