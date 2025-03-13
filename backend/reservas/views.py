from rest_framework import viewsets, permissions
from .models import Reserva
from .serializers import ReservaSerializer 
from django.http import JsonResponse

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all().order_by('-data_horario')
    serializer_class = ReservaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

def get_reservas(request):
    reservas = Reserva.objects.all()
    reservas_list = list(reservas.values('usuario', 'data_horario', 'jogadores_confirmados', 'pago'))
    return JsonResponse(reservas_list, safe=False)