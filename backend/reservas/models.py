from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Reserva(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    data_horario = models.DateTimeField()
    jogadores_confirmados = models.PositiveIntegerField(default=1)
    pago = models.BooleanField(default=False) # <= Pago online (não funcionando ainda)
    pago_presencialmente = models.BooleanField(default=False) # Pagamento Presencialmente
    
    def __str__(self):
        return f"Reserva de {self.usuario.username} em {self.data_horario} - Pago: {self.pago or self.pago_presencialmente} "
    
    