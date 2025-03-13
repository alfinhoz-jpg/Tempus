from django.contrib import admin
from django.shortcuts import render
from django.urls import path
from django.contrib.auth import get_user_model
from reservas.models import Reserva
from django.conf import settings

class CustomAdminSite(admin.AdminSite):
    site_header = "Painel de Administração - Tempus"
    site_title = "Admin - Tempus"
    index_title = "Bem-vindo ao Painel"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path("admin-dashboard/", self.admin_dashboard),
        ]
        return custom_urls + urls

    def admin_dashboard(self, request):
        User = get_user_model()
        user_count = User.objects.count()
        reserva_count = Reserva.objects.count()
        return render(request, "admin/index.html", {"user_count": user_count, "reserva_count": reserva_count})
    
def custom_admin_css():
    return [f"{settings.STATIC_URL}admin/css/custom_admin.css"]

admin.AdminSite.media = property(lambda self: {"css": {"all": custom_admin_css()}})



admin.site = CustomAdminSite()
