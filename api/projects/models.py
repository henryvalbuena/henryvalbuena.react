from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=60, default='name')
    title = models.CharField(max_length=60, default='title')
    meta = models.CharField(max_length=100, default='meta')
    desc = models.CharField(max_length=100, default='desc')
    detail = models.CharField(max_length=300, default='detail')
    img = models.CharField(max_length=100, default='img')
    src = models.CharField(max_length=100, default='src')

    def __str__(self):
        return self.name
