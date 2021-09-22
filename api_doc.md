# StayHere App Server

StayHere App is an application to inform rent room at your destination places.

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
