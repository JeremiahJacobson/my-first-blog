from django.urls import path
from django.conf.urls import url, include
from . import views



urlpatterns = [
    path('', views.home_page, name='home_page'),

    url(r'^blog', include('blog.urls')),
    url(r'^eq_plot', include('eq_plot.urls'))

]
