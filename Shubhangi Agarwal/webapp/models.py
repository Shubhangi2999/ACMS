from django.db import models

class Partner(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=32)
    lastName = models.CharField(max_length=32)
    email = models.EmailField()
    contact = models.CharField(max_length=10)
    address = models.CharField(max_length=300)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    typestore = models.CharField(max_length=32)
    size = models.CharField(max_length=32)
    workingemployees = models.PositiveIntegerField()
    service = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    confirmPassword = models.CharField(max_length=32)

    def __str__(self):
        return self.firstName
