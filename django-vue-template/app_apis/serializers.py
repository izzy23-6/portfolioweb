from rest_framework import serializers

from .models import Skills, About, Contact, Portfolio


class SkillsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Skills
    fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
  class Meta:
    model = About
    fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
  class Meta:
    model = Contact
    fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Portfolio
    fields = '__all__'
