# University API

## Prefix http://localhost:3333/api/v1/

## Data Student

### Show all of student

#### Request

method:GET http://localhost:3333/api/v1/student

#### Response

```{
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

### Show id student get by id

#### Request 

* method:GET http://localhost:3333/api/v1/student/:id

#### Response 

```{
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

### Create student data 

#### Request 

* request by JSON 

* method:GET http://localhost:3333/api/v1/student/:id

#### Form JSON 

```{
    "first_name":"YourFirstName",
    "last_name":"YourLastName",
    "universities_name":"YourUniversity"
}
```
#### Response

``` {
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

### Update student data 

#### Request

* request by JSON

* method:PUT http://localhost:3333/api/v1/student/:id 

#### Form JSON 

```{
    "first_name":"NewDFirstName",
    "last_name":"NewLastName",
}
```

#### Response 

``` {
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
### Delete student data 

# Request

* method:DELETE http://localhost:3333/api/v1/student/:id 

# Response 
```
{
    "status": 200,
    "message": "DeleteComplete"
}
```
