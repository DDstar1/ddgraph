from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class UserInfo(models.Model):
    user =  models.ForeignKey(User, on_delete=models.CASCADE, null=True )
    title = models.TextField(blank=True)
    graph = models.ImageField(upload_to='uploads/', blank=True)
    def __str__(self):
        return self.user.username

class UserPoint(models.Model):
    user =  models.OneToOneField(User, on_delete=models.CASCADE, null=True )
    point = models.IntegerField(default=5)
    color = models.TextField(default='black')
    
    

class UserMessges(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True )
    text = models.TextField(blank=True)
    posted = models.DateTimeField(auto_now_add=True)
    color = models.TextField(default='black')