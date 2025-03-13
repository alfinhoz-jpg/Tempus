from django.http import JsonResponse

def home (request):
    return JsonResponse({'message': 'Bem vindo à API da Tempus'})