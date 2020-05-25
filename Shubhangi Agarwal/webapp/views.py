from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import get_authorization_header, BaseAuthentication
from rest_framework import status
import jwt, json, csv
from .models import Customer, Store
from .serializers import *


@api_view(['POST'])
def customer_signup(request):
    if request.method == 'POST':
        form_data = {}
        form_data = request.data
        serializer = CustomerSerializer(data=form_data)

        if serializer.is_valid():
            serializer.save()
            owner=Customer.objects.get(pk=form_data["email"])
            store = Store(owner=owner,
                          storename=form_data["storename"],
                          address=form_data["address"],
                          city = form_data["city"],
                          state = form_data["state"],
                          pincode = form_data["pincode"],
                          typestore = form_data["typestore"],
                          size = form_data["size"],
                          workingemployees = form_data["workingemployees"],
                          customer = form_data["customer"],
                          service = form_data["service"])
            store.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
        serializer = StoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            with open('training.csv', 'a+', newline='') as file:
                writer = csv.writer(file)
                writer.writerow([serializer.data])
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
