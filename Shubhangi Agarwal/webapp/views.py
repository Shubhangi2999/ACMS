#from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
#from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.decorators import api_view #, renderer_classes
#from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import status
import csv, json
from .models import Customer, Store
from .serializers import *


@api_view(['POST', 'GET'])
def customer_signup(request):
    if request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
#           with open('training.csv', 'a+', newline='') as file:
#               writer = csv.writer(file)
#               writer.writerow([serializer.data])
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)

def authenticate(email, password):
    try:
        Customer.objects.get(pk=email, password=password)
    except Customer.DoesNotExist:
        return 0
    else:
        return 1


@api_view(['POST', 'GET'])
def login(request):
    
    if request.method == 'POST':
        data = {}
        data = request.data
        
        if authenticate(data["email"],data["password"]) == 0:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        else:
            token = { "email" : data["email"] }
            dump = json.dumps(token)
            return HttpResponse(dump, status=200)
        
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', 'GET'])
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

    elif request.method == 'GET':
        data = Store.objects.all()
        serializer = StoreSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST','PUT', 'DELETE'])
def delete_store(request, id):
    try:
        store = Store.objects.get(pk=id)
    except Store.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

#    if request.method == 'PUT':
#        serializer = StoreSerializer(store, data=request.data, context={'request': request})
#        if serializer.is_valid():
#            serializer.save()
#            return Response(status=status.HTTP_204_NO_CONTENT)
#        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        store.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_400_BAD_REQUEST)
