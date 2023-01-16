
from django.contrib import admin
from main.models import UserInfo, UserPoint, UserMessges
# Register your models here.



class UserInfoAdmin(admin.ModelAdmin):
    list_display = ('title', 'graph')

class UserPointAdmin(admin.ModelAdmin):
    list_display = ('user','point', 'color')
 

class UserMessgesAdmin(admin.ModelAdmin):
    list_display = ('user','posted','text', 'color')
 
    
    
admin.site.register(UserInfo, UserInfoAdmin)

admin.site.register(UserMessges, UserMessgesAdmin)

admin.site.register(UserPoint, UserPointAdmin)