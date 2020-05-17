from django.contrib import admin
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^api/login/$', views.login),
    url(r'^api/signup/$', views.customer_signup),
    url(r'^api/dashboard/add-store/$', views.add_store),
    url(r'^api/dashboard/delete-store/$', views.delete_store),
]