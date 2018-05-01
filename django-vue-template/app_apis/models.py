from django.db import models

# Create your models here.
class Skills(models.Model):
    name = models.CharField(max_length=15)
    description = models.TextField(max_length=None)

    def __str__(self):
        return self.name


class About(models.Model):
    title = models.CharField(max_length=15)
    year = models.CharField(max_length=15, null=True)
    summary = models.TextField(max_length=None)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()

    def __str__(self):
        return self.name

class Portfolio(models.Model):
    title = models.CharField(max_length=20)
    file = models.FileField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


