from django.contrib import admin
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    url(r'^api/login/$', csrf_exempt(views.login)),
    url(r'^api/signup/$', views.customer_signup),
    url(r'^api/dashboard/customer-details/$', csrf_exempt(views.customer_details)),
    url(r'^api/dashboard/store-details/$', csrf_exempt(views.store_details)),
    url(r'^api/dashboard/add-store/$', views.add_store),
    url(r'^api/dashboard/delete-store/$', views.delete_store),
]