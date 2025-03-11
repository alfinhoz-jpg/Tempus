from django.contrib import admin

admin.site.site_header = "Painel TEMPUS"
admin.site.site_title = "Admin TEMPUS"
admin.site.index_title = "Bem-vindo ao Painel de Administração"

class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        from django.urls import path
        urls = super().get_urls()
        return [
            print(f'Está funcionando!')
        ] + urls

admin.site = CustomAdminSite()
