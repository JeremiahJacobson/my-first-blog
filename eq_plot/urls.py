from django.urls import path
from django.conf.urls import url
from . import views


urlpatterns = [
    path('', views.eq_plot, name='eq_plot'),

    path('home_view', views.home_view, name='home_view'),

]
