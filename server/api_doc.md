# E-commerce CMS
Membuat sebuah website CMS E-commerce dengan Sequelize dan Postgresql (server) dan Vue.js (client)


# List Routing
- 'POST /products'
- 'GET /products'
- 'GET /products/:id
- 'PUT /products/:id'
- 'DELETE /products/:id'
- 'POST /login'

# Details

## POST /login
_Request Header_
```
not needed
```

_Request Body_
```
{
    "username" : <add your username or email>,
    "password" : <add your password>
}
```

_Request Response_
```
{
    access_token: <your API token>
}
```

## POST /products
_Request Header_
```
{
    "access_token": <add your token>
}
```
_Request Body_
```
{
    "name": "Atlas Dunia",
    "img_url": undefined,
    "price": 10000,
    "stock": 10
}
```

_Request Response_:
_* Response(201)_
```
{
    "id": 1,
    "name": "Atlas Dunia",
    "img_url": undefined,
    "price": 10000,
    "stock": 10,
    "UserId": 2,
    "due_date": "2020-06-09T00:00:00.000Z",
    "createdAt": "2020-06-08T06:43:51.386Z",
    "updatedAt": "2020-06-08T13:07:25.937Z"
}
```

## GET /products
_Request Header_
```
{
    "access_token": <your token> 
}
```

_Request Body_
```
not needed
```

_Request Response_
_*Response(200)_
```
[{
    products:{
        "id": 1,
        "name": "Atlas Dunia",
        "img_url": undefined,
        "price": 10000,
        "stock": 10,
        "UserId": 2,
        "due_date": "2020-06-09T00:00:00.000Z",
        "createdAt": "2020-06-08T06:43:51.386Z",
        "updatedAt": "2020-06-08T13:07:25.937Z"
    }
}]
```

## GET /products/1
_Request Header_
```
{
    "access_token": <your token> 
}
```

_Request Body_
```
not needed
```

_Request Response_
_*Response(200)_
```
{
    "id": 1,
    "name": "Atlas Dunia",
    "img_url": undefined,
    "price": 10000,
    "stock": 10,
    "UserId": 2,
    "due_date": "2020-06-09T00:00:00.000Z",
    "createdAt": "2020-06-08T06:43:51.386Z",
    "updatedAt": "2020-06-08T13:07:25.937Z"
}
```

## PUT /products/1
_Request Header_
```
{
    "access_token": <your token> 
}
```

_Request Body_
```
{
    "name": "Atlas Dunia",
    "img_url": undefined,
    "price": 10000,
    "stock": 5
}
```

_Request Response_
_*Response(200)_
```
{
    "message": `Data's succesfully updated!`
}
```

## DELETE /products/1
_Request Header_
```
{
    "access_token": <your token>
}
```

_Request Body_
```
not needed
```

_Request Response_
_*Response(200)_
```
{
    "message": `Data's succesfully updated!`
}
```
