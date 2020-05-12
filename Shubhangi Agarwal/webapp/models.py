from django.db import models


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=32)
    lastName = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=10)
    password = models.CharField(max_length=32)

    def __str__(self):
        return self.firstName


class Store(models.Model):
    ownerId = models.ForeignKey(Customer, on_delete=models.CASCADE)
    storeName = models.CharField(max_length=32)
    address = models.CharField(max_length=512)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    pincode = models.CharField(max_length=6)
    typeStore = models.CharField(max_length=32)
    size = models.CharField(max_length=32)
    employees = models.PositiveIntegerField()
    customers = models.PositiveIntegerField()
    service = models.CharField(max_length=32)

    def __str__(self):
        return self.storeName
