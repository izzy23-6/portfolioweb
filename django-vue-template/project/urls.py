"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework import routers

from app_apis.views import SkillsViewset, AboutViewset, ContactViewset, PortfolioViewset

router = routers.DefaultRouter()
router.register(r'^skills', SkillsViewset, base_name='skills')
router.register(r'^about', AboutViewset, base_name='about')
router.register(r'^contact', ContactViewset, base_name='contact')
router.register(r'^portfolio', PortfolioViewset, base_name='porfolio')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='project/spa.html'), name='home'),
]
