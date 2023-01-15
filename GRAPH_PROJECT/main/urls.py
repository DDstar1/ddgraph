from django.urls import path
from main import views

urlpatterns = [
    path('', views.home, name='index'),
    path('linegraph/', views.linegraph, name='linegraph'),
    path('register/', views.register, name='register'),
    path('login/', views.loginpage, name='login'),
    path('logout/', views.logOutRequest, name='logout'),
    path('verify-payment/', views.verifyPayment, name='verifyPayment'),
    path('funymous/', views.anonymous, name='funymous'),
     path('update-anonymous/', views.updateAnonymous, name='updateAnonymous'),
]