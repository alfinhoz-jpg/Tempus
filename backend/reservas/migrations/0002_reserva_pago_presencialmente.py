# Generated by Django 5.1.7 on 2025-03-10 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reserva',
            name='pago_presencialmente',
            field=models.BooleanField(default=False),
        ),
    ]
