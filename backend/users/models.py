from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser (AbstractUser): 
    is_admin = models.BooleanField(default=False)
    is_employee = models.BooleanField(default=False) #Funcionário
    is_custumer = models.BooleanField(default=True) #Cliente