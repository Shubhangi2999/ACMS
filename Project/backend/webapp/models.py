from django.db import models


class Customer(models.Model):
    email = models.CharField(max_length=64, primary_key=True)
    first_name = models.CharField(max_length=32, blank=True)
    last_name = models.CharField(max_length=32, blank=True)
    password = models.CharField(max_length=32)
    contact = models.CharField(max_length=10)


    def __str__(self):
        return self.email


class Store(models.Model):
    owner = models.ForeignKey(Customer, on_delete=models.CASCADE)
    storename = models.CharField(max_length=32)
    address = models.CharField(max_length=512)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    pincode = models.CharField(max_length=6)
    typestore = models.CharField(max_length=32)
    size = models.CharField(max_length=32)
    workingemployees = models.PositiveIntegerField()
    customer = models.PositiveIntegerField()
    service = models.CharField(max_length=32)

    def __str__(self):
        return self.storename
