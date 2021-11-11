from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

urlpatterns = [
    path('posts/', PostView.as_view()),
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token-refreash/', TokenRefreshView.as_view()),
]
