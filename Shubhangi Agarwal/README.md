# ACMS

PHASE 1

### BACKEND:

Pre-requisites:
  Python3, pip
  
  
Install 

  1- django

  2- djangorestframework

  3- django-cors-headers
  
  4- djangorestframework-simplejwt
  
  5- djangorestframework-jwt

  
After installing the above dependencies, through terminal go to the project directory and run these commands:

  1- python manage.py makemigrations

  2- python manage.py migrate 

  3- python manage.py runserver //to start the server

Now, open localhost:8000/webapp/api/partners in a browser.


POST data in this format:

      {
        "firstName": "abc",
        "lastName": "xyz",
        "email": "xyz@gmail.com",
        "contact": "8313115029",
        "address": "xyz",
        "city": "xyz",
        "state": "xyz",
        "typestore": "xyz",
        "size": "1300",
        "workingemployees": 5,
        "customers": 100, 
        "service": "return",
        "password": "pass",
        "confirmPassword": "pass"
      }
 
training.csv file attributes format: { id , address , city , state , typestore , size , workingemployees , customers , service }

### FRONTEND:

Pre-requisites:
  Node.js,npm
  
Install

  1- create-react-app
  
  2- react-scripts
  
After installing the above, through terminal go to the frontend project directory and run these commands:

  1- npm install

  2- npm start //to start the server

Now, open localhost:3000/ in a browser.

### End-to-end Working: (POST Request)

1- Start the backend server through a terminal

2- Start the frontend server through another terminal and go to http://localhost:3000/

3- Fill the form and press Register button, to see the if data is sent to backend successfully, go to http://localhost:8000/webapp/api/partners/
