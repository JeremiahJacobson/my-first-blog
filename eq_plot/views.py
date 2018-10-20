from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone

from django.contrib.auth.decorators import login_required
# Create your views here.
def eq_plot(request):

    return render(request, 'eq_plot/eq_plot.html', {})

def home_view(request):

    return redirect('home_page')
