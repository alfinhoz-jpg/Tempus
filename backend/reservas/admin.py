from django.contrib import admin
from django.db.models import Count
from django.utils.html import format_html
from .models import Reserva


class DashboardAdmin(admin.AdminSite):
    site_header = "Dashboard TEMPUS"

    def get_urls(self):
        from django.urls import path
        urls = super().get_urls()
        extra_urls = [
            path("dashboard/", self.admin_view(self.dashboard_view))
        ]
        return extra_urls + urls

    def dashboard_view(self, request):
        total_reservas = Reserva.objects.count()
        reservas_pagas = Reserva.objects.filter(pago=True).count()
        reservas_presenciais = Reserva.objects.filter(pago_presencialmente=True).count()
        
        return format_html(f"""
            <h2>Estatísticas</h2>
            <p>Total de Reservas: {total_reservas}</p>
            <p>Reservas Pagas Online: {reservas_pagas}</p>
            <p>Reservas Pagas Presencialmente: {reservas_presenciais}</p>
        """)

admin.site = DashboardAdmin()
admin.site.register(Reserva)
