from rest_framework import viewsets, permissions
from .models import Reserva
from .serializers import ReservaSerializer  # Verifique se este import está correto!

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all().order_by('-data_horario')
    serializer_class = ReservaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)
