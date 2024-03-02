git # myproject/myproject/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Define URL pattern for the root path

]
