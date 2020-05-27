from django.db import models


class Customer(models.Model):
    email = models.CharField(max_length=64, primary_key=True)
    firstName = models.CharField(max_length=32, blank=True)
    lastName = models.CharField(max_length=32, blank=True)
    password = models.CharField(max_length=32)
    contact = models.CharField(max_length=10)


    def __str__(self):
        return self.email


class Store(models.Model):
    owner = models.ForeignKey(Customer, on_delete=models.CASCADE)
    storeName = models.CharField(max_length=32)
    address = models.CharField(max_length=512)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    pincode = models.CharField(max_length=6)
    typeStore = models.CharField(max_length=32)
    size = models.CharField(max_length=32)
    workingEmployees = models.PositiveIntegerField()
    customer = models.PositiveIntegerField()
    service = models.CharField(max_length=32)
    program = models.CharField(max_length=32)
    feedback = models.CharField(max_length=256, default='', blank=True)

    def __str__(self):
        return self.storename
