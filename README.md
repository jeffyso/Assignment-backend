# API University and Student  

# About this project 
 This project is a API University and Student create by adonis js .You can running method GET POST PUT DELETE on this project. 
 
## prerequisite

* adonisJS
* docker

## needed apps

* VScode
* NodeJS

## Getting started
* You have to run command ``docker-compose up -d`` for use database mariadb
* This project require localhost server to create migration and you must setting .env as needed

## Run this project

``
adonis serve --dev
``

## Prefix API 
http://localhost:PORT/api/v1/

## Data Student

## Show all of student

#### Request

method:GET http://localhost:3333/api/v1/student

#### Response

```
{
    "status": 200,
    "data": [
        {
            "student_id": 1,
            "first_name": "jzo",
            "last_name": "jeff",
            "created_at": "2021-01-07 22:00:57",
            "updated_at": "2021-01-07 22:00:57"
        },
        {
            "student_id": 2,
            "first_name": "jzo",
            "last_name": "jeff",
            "created_at": "2021-01-07 22:01:27",
            "updated_at": "2021-01-07 22:01:27"
        }
    ]
}
```

## Show id student get by id

#### Request 

* method:GET http://localhost:3333/api/v1/student/:id

#### Response 

```
{
    "status": 200,
    "data": [
        {
            "student_id": 1,
            "first_name": "Ratta",
            "last_name": "Ekum",
            "created_at": "2021-01-08 09:02:05",
            "updated_at": "2021-01-08 09:02:05",
            "universities": [
                {
                    "universities_id": 2,
                    "universities_name": "CMU",
                    "created_at": "2021-01-08 09:01:47",
                    "updated_at": "2021-01-08 09:01:47",
                    "pivot": {
                        "university_id": 2,
                        "student_id": 1
                    }
                }
            ]
        }
    ]
}
```

## Create student data 

#### Request 

* request by JSON 

* method:POST    http://localhost:3333/api/v1/student/

#### Form JSON 

```
{
    "first_name":"YourFirstName",
    "last_name":"YourLastName",
    "universities_name":"YourUniversity"
}
```
#### Response

``` 
{
    "status": 200,
    "data": {
        "first_name": "JEFF",
        "last_name": "JZO",
        "created_at": "2021-01-08 09:12:57",
        "updated_at": "2021-01-08 09:12:57",
        "student_id": 2
    }
}
```

## Update student data 

#### Request

* request by JSON

* method:PUT http://localhost:3333/api/v1/student/:id 

#### Form JSON 

```
{
    "first_name":"NewDFirstName",
    "last_name":"NewLastName",
}
```

#### Response 

```
{
    "status": 200,
    "data": [
        {
            "student_id": 2,
            "first_name": "Atikom",
            "last_name": "JZO",
            "created_at": "2021-01-08 09:12:57",
            "updated_at": "2021-01-08 09:19:41"
        }
    ]
}
```
## Delete student data 


#### Request

* method:DELETE http://localhost:3333/api/v1/student/:id 

#### Response 
```
{
    "status": 200,
    "message": "DeleteComplete"
}
```


## Data University

## Show all of University

#### Request

method:GET http://localhost:3333/api/v1/university

#### Response

```
{
    "status": 200,
    "data": [
        {
            "universities_id": 1,
            "universities_name": "SWU",
            "created_at": "2021-01-08 09:01:40",
            "updated_at": "2021-01-08 09:01:40"
        },
        {
            "universities_id": 2,
            "universities_name": "CMU",
            "created_at": "2021-01-08 09:01:47",
            "updated_at": "2021-01-08 09:01:47"
        },
        {
            "universities_id": 3,
            "universities_name": "KU",
            "created_at": "2021-01-08 09:01:55",
            "updated_at": "2021-01-08 09:01:55"
        }
    ]
}
```

## Show id university get by id

#### Request 

* method:GET http://localhost:3333/api/v1/university/:id

#### Response 

```
{
    "status": 200,
    "data": [
        {
            "universities_id": 2,
            "universities_name": "CMU",
            "created_at": "2021-01-08 09:01:47",
            "updated_at": "2021-01-08 09:01:47",
            "students": [
                {
                    "student_id": 2,
                    "first_name": "Atikom",
                    "last_name": "JZO",
                    "created_at": "2021-01-08 09:12:57",
                    "updated_at": "2021-01-08 09:19:41",
                    "pivot": {
                        "student_id": 2,
                        "university_id": 2
                    }
                }
            ]
        }
    ]
}
```

## Create university data 

#### Request 

* request by JSON 

* method:POST http://localhost:3333/api/v1/university

#### Form JSON 

```
{
    "universities_name":"UniversityName"
}

```
#### Response

``` 
{
    "status": 200,
    "data": {
        "universities_name": "SPU",
        "created_at": "2021-01-08 09:43:10",
        "updated_at": "2021-01-08 09:43:10",
        "universities_id": 4
    }
}
```

## Update university data 

#### Request

* request by JSON

* method:PUT http://localhost:3333/api/v1/university/:id 

#### Form JSON 

```
{
    "universities_name":"NewUniversityName"
}
```

#### Response 

```
{
    "status": 200,
    "data": [
        {
            "universities_id": 4,
            "universities_name": "MFU",
            "created_at": "2021-01-08 09:43:10",
            "updated_at": "2021-01-08 09:44:32"
        }
    ]
}
```
## Delete university data 

#### Request

* method:DELETE http://localhost:3333/api/v1/university/:id 

#### Response 
```
{
    "status": 200,
    "message": "DeleteComplete"
}
```

