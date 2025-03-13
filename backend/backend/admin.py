from django.contrib import admin

admin.site.site_header = "Painel TEMPUS"
admin.site.site_title = "Admin TEMPUS"
admin.site.index_title = "Bem-vindo ao Painel de Administração"

class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        from django.urls import path
        urls = super().get_urls()
        return urls

admin.site = CustomAdminSite()

admin.site.site_header = "TEMPUS Admin"
admin.site.index_title = "Gerenciamento do Sistema"
admin.site.site_title = "Admin - TEMPUS"

def custom_admin_css():
    from django.conf import settings
    return [
        f"{settings.STATIC_URL}admin/css/custom_admin.css"
    ]
    
    admin.AdminSite.media = property(lambda self: {"css": {"all": custom_admin_css()}})
