from django.contrib import admin

# Register your models here.
from .models import Skills, About, Contact, Portfolio

admin.site.register(Skills)
admin.site.register(About)
admin.site.register(Contact)
admin.site.register(Portfolio)