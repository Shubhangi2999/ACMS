from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import get_authorization_header, BaseAuthentication
from rest_framework import status
import jwt, json, csv, random
from .util import predict_program
from .models import Customer, Store
from .serializers import *


def predict(location,employees,total_sqft):
    rating = random.randint(0, 5)
    Dpmo = random.randint(0, 100)
    predicted_program = predict_program(location,rating,employees,total_sqft,Dpmo)
    program = ""
    if predicted_program == 1:
        program = "3P"
    elif predicted_program == 2:
        program = "IHS"
    elif predicted_program == 3:
        program = "Locker"
    elif predicted_program == 4:
        program = "Helix"
    return program


@api_view(['POST'])
def customer_signup(request):
    if request.method == 'POST':
        form_data = {}
        form_data = request.data
        customer = Customer(email = form_data["email"],
                            firstName = form_data["firstName"],
                            lastName = form_data["lastName"],
                            contact = form_data["contact"],
                            password = form_data["password"])
        customer.save()
        predicted_program = predict(form_data["address"],form_data["workingEmployees"],form_data["size"])
        store = Store(owner = customer,
                      storeName = form_data["storeName"],
                      address = form_data["address"],
                      city = form_data["city"],
                      state = form_data["state"],
                      pincode = form_data["pincode"],
                      typeStore = form_data["typeStore"],
                      size = form_data["size"],
                      workingEmployees = form_data["workingEmployees"],
                      customer = form_data["customer"],
                      service = form_data["service"],
                      program = predicted_program)
        store.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)


def authenticate(email, password):
    try:
        Customer.objects.get(email=email, password=password)
    except Customer.DoesNotExist:
        return 0
    else:
        return 1


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = {}
        data = request.data
        customer = authenticate(data["email"],data["password"])
        if customer == 0:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            email = str(data["email"])
            jwt_token = jwt.encode({"email": email} , "SECRET_KEY")
            return HttpResponse([jwt_token], status=200)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def customer_details(request):
    if request.method == 'GET':
        auth = get_authorization_header(request).split()
        token = auth[0]
        payload = jwt.decode(token, "SECRET_KEY")
        data = Customer.objects.filter(pk=payload["email"])
        serializer = CustomerSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def add_store(request):
    if request.method == 'POST':
        form_data = {}
        form_data = request.data
        auth = get_authorization_header(request).split()
        token = auth[0]
        payload = jwt.decode(token, "SECRET_KEY")
        owner = Customer.objects.get(pk=form_data["email"])
        predicted_program = predict_program(form_data["address"], form_data["workingEmployees"], form_data["size"])
        store = Store(owner=owner,
                      storeName=form_data["storeName"],
                      address=form_data["address"],
                      city=form_data["city"],
                      state=form_data["state"],
                      pincode=form_data["pincode"],
                      typeStore=form_data["typeStore"],
                      size=form_data["size"],
                      workingEmployees=form_data["workingEmployees"],
                      customer=form_data["customer"],
                      service=form_data["service"],
                      program=predicted_program)
        store.save()
        with open('training.csv', 'a+', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(store)
        return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def store_details(request):
    if request.method == 'GET':
        auth = get_authorization_header(request).split()
        token = auth[0]
        payload = jwt.decode(token, "SECRET_KEY")
        data = Store.objects.filter(owner=payload["email"])
        serializer = StoreSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def delete_store(request, id):
    try:
        store = Store.objects.get(pk=id)
    except Store.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        store.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_400_BAD_REQUEST)
