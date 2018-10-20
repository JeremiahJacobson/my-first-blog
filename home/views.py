from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone


from django.contrib.auth.decorators import login_required

def home_page(request):

    return render(request, 'home/homepage.html', {})
