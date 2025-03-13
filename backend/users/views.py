from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from .serializers import userSerializer

User = get_user_model()

class RegisterView(generics.CreateAPIView): 
    queryset = User.objects.all()
    serializer_class = userSerializer
    
class LoginView(generics.GenericAPIView):
    serializer_class = userSerializer
    
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response({'error': 'Credenciais inválidas'}, status=400)
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh', str(refresh),
            'access', str(refresh.acess_token),
        })
    
class LogoutView(generics.GenericAPIView):
    def post (self, request):
        return Response({"message": 'Logout feito com sucesso'})