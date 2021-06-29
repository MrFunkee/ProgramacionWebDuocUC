from django.shortcuts import render

# Create your views here.
def acerca_de(request):
    return render(request, "core/acerca_de.html")

def index(request):
    return render(request, "core/index.html")