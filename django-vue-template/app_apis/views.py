# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from .models import Skills, About, Contact, Portfolio
from .serializers import SkillsSerializer, AboutSerializer, ContactSerializer, PortfolioSerializer


# Create your views here.
class SkillsViewset(viewsets.ModelViewSet):
  queryset = Skills.objects.all()
  serializer_class = SkillsSerializer


class AboutViewset(viewsets.ModelViewSet):
  queryset = About.objects.all()
  serializer_class = AboutSerializer


class ContactViewset(viewsets.ModelViewSet):
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer

  def post(self, request):
    serializer = serializers.ContactSerializer(data=request.data)

    if serializer.is_valid():
      name = serilizer.data.get('name')
      message = 'Hellow {0}'.format(name)
      return Response({'message': message})
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PortfolioViewset(viewsets.ModelViewSet):
  queryset = Portfolio.objects.all()
  serializer_class = PortfolioSerializer

  def post(self, request, *args, **kwargs):
    Portfolio_serializer = PortfolioSerializer(data=request.data)
    if Portfolio_serializer.is_valid():
      Portfolio_serializer.save()
      return Response(Portfolio_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(Portfolio_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
