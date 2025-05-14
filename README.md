# to-do-app-backend

GET Retornar 1 ou mais recursos
https://minhaapi.com.br/api/users
[
    {
        "id": 1,
        "name": "Eder",
        "userName": "",
        "zipCode": "",
        "email": ""
    }
]

https://minhaapi.com.br/api/users/1
{
        "id": 1,
        "name": "Eder",
        "userName": "",
        "zipCode": "",
        "email": ""
}

POST #Cria um Recurso
https://minhaapi.com.br/api/users
body: 
{
    "name": "Eder",
    "userName": "",
    "zipCode": "",
    "email": ""
}

Resposta:
200 OK
{
        "id": 1,
        "name": "Eder",
        "userName": "",
        "zipCode": "",
        "email": ""
}

PUT
https://minhaapi.com.br/api/users/1
{
        "name": "Eder Quesado",
        "userName": "",
        "email": ""
}

Resposta:
200 OK
{
        "id": 1,
        "name": "Eder",
        "userName": "",
        "zipCode": null,
        "email": ""
}

DELETE https://minhaapi.com.br/api/users

PATCH 
{
        "name": "Eder Quesado"
}