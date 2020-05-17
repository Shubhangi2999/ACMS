from django.contrib import admin
from .models import Customer, Store
# Register your models here.


class CustomerAdmin(admin.ModelAdmin):
    pass


admin.site.register(Customer, CustomerAdmin)


class StoreAdmin(admin.ModelAdmin):
    pass


admin.site.register(Store, StoreAdmin)
