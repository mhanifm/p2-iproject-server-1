# BlackDoors App Server

BlackDoors App is an application to inform rent room at your destination places.

&nbsp;

## Endpoints :

list of available endpoints:

- `POST /register`
- `POST /login`
- `GET /covid/histories`
- `GET /list/hotels`
- `GET /countries`

---

&nbsp;

## `Endpoint Register and Login`
**`POST /register`**

Use this to register account

&nbsp;

> _Request Header_
```
not needed
```

> _Request Body_
```
{
    name: <your name>,
    email: <your email>,
    password: <your password>
}
```

>_Response ( 201 - Created )_
```
{
    "id": 1,
    "email": "user@mail.com"
}
```

> _Request ( 400 - Bad Request )_
```
{
    "message": [
        "Email is required",
        "Email must be an email format",
        "Password is required"
    ]
}
```
OR
```
{
    "message": [
        "Email is already exist"
    ]
}
```

&nbsp;

**`POST /login`**

Use this to login

&nbsp;

> _Request Header_
```
not needed
```

> _Request Body_
```
{
    email: <your email>,
    password: <your password>
}
```

>_Response ( 200 - OK )_
```
{
    "access_token": <token>,
    "id": <your id>,
    "name": <your name>
    "email": <your email>
}
```

> _Request ( 401 - Unauthorized )_
```
{
    "message": "Invalid email or password"
}
```

&nbsp;

**`GET /covid/histories`**

Use this to get info new covid case in your countries

&nbsp;

> _Request Header_
```
not needed
```

> _Request Body_
```
not needed
```

>_Response ( 200 - OK )_
```
{
    "data": {
        "country": "Indonesia",
        "newCase": "+2881",
        "date": "2021-09-23"
    }
}
```

> _Request ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

&nbsp;

**`GET /list/hotels`**

Use this to get list hotels near your area

&nbsp;

> _Request Header_
```
not needed
```

> _Request Body_
```
not needed
```

>_Response ( 200 - OK )_
```
[
    {
        "id": "55911a81498ef8e407c4113c",
        "name": "The Sahira Hotel",
        "address": "Jl. Ahmad Yani No. 17",
        "lat": -6.574903370703954,
        "lng": 106.79996335526114,
        "city": "Bogor"
    },
    {
        "id": "4c092241ed259521c1e51256",
        "name": "Papyrus Tropical Hotel",
        "address": "Jln Perdana Raya kav.4",
        "lat": -6.558926078394115,
        "lng": 106.79065449558058,
        "city": "Bogor"
    },
    {
        "id": "4f3bacfbe4b0a9ee4c99170f",
        "name": "Padjadjaran Suites Hotel & Conference",
        "address": "Jl. Raya Pajajaran No.17",
        "lat": -6.576246518564453,
        "lng": 106.80692029218305,
        "city": "Bogor"
    },
    {
        "id": "548feddf498e5b33f9d06662",
        "name": "Bogor Icon Hotel & Convention",
        "address": "Jalan Raya Baru No. 1",
        "lat": -6.5560960249798335,
        "lng": 106.78273746902553,
        "city": "Bogor"
    },
    {
        "id": "54131440498eaf476d5e8c6c",
        "name": "Arch Hotel Bogor by Horison",
        "address": "Jl. Raya Pajajaran No. 225",
        "lat": -6.578712776781658,
        "lng": 106.80745314313324,
        "city": "Bogor"
    }
]
```

> _Request ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```

&nbsp;

**`GET /countries`**

Use this to get list hotels near your area

&nbsp;

> _Request Header_
```
not needed
```

> _Request Body_
```
not needed
```

>_Response ( 200 - OK )_
```
[
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    ...
]
```

> _Request ( 500 - Internal Server Error )_
```
{
    "message": "Internal server error"
}
```