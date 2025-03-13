from django.urls import path
from . import views

urlpatterns = [
    path('api/reservas/', views.get_reservas, name='get_reservas'),
]
