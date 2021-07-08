from django import forms
from django.db.models.fields import DateField
from django.forms import ModelForm
from .models import Producto,Post

class productoForm(forms.ModelForm):

    class Meta:
        model = Producto

        fields = [
                'idProducto',
                'descripcion',
                'precio',
                'cantidad',
                'imagen',
            ]   

        labels = {
                'idProducto':'Código Producto',
                'descripcion':'Descripción',
                'precio':'Precio Unitario $',
                'cantidad':'Stock',
                'imagen':"Imagen",            
            }
        widgets = {
                'idProducto':forms.TextInput(attrs={'class':'form-control'}),
                'descripcion':forms.TextInput(attrs={'class':'form-control','type':'text'}),
                'precio':forms.TextInput(attrs={'class':'form-control','type':'number'}),
                'cantidad':forms.TextInput(attrs={'class':'form-control','type':'number'}),
                'imagen':forms.FileInput(attrs={'class':'form-control'}),
            }

class blogForm(forms.ModelForm):

    class Meta:
        model = Post

        fields = [
                'title',
                'content',
                'image',
            ]   

        labels = {
                'title': 'titulo',
                'content': 'contenido',
                'image': 'imagen',           
            }
        widgets = {

                'title':forms.TextInput(attrs={'class':'form-control','type':'text'}),
                'content':forms.TextInput(attrs={'class':'form-control','type':'text'}),
                'image':forms.FileInput(attrs={'class':'form-control'}),

            }
