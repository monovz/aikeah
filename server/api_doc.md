# E-commerce
Make e-commerce website for user with Sequelize and Postgresql (server) also Vue.js (client)


# List Routing
- 'POST /products'
- 'GET /products'
- 'GET /products/:id
- 'PUT /products/:id'
- 'DELETE /products/:id'
- 'POST /products/:id/transaction'
- 'DELETE /products/:id/transaction'
- 'GET /transactions'
- 'PUT /transactions'
- 'POST /login'
- 'POST /register'

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
    token: <your API token>
}
```

## POST /register
_Request Header_
```
not needed
```

_Request Body_
```
{
    "username" : <add your username>,
    "email" : <add your email>,
    "password" : <add your password>
}
```

_Request Response_
```
{
    "username" : <add your username>,
    "email" : <add your email>,
    "password" : <add your password>,
    "createdAt": "2020-06-08T06:43:51.386Z",
    "updatedAt": "2020-06-08T13:07:25.937Z"
}
```

## POST /products
_Request Header_
```
{
    "token": <add your token>
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
    "createdAt": "2020-06-08T06:43:51.386Z",
    "updatedAt": "2020-06-08T13:07:25.937Z"
}
```

## GET /products
_Request Header_
```
not needed
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
        "createdAt": "2020-06-08T06:43:51.386Z",
        "updatedAt": "2020-06-08T13:07:25.937Z"
    }
}]
```

## GET /products/1
_Request Header_
```
not needed
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
    "createdAt": "2020-06-08T06:43:51.386Z",
    "updatedAt": "2020-06-08T13:07:25.937Z"
}
```

## PUT /products/1
_Request Header_
```
{
    "token": <your token> 
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
    "token": <your token>
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

## POST /products/:id/transaction
_Request Header_
```
{
    "token": <add your token>
}
```
_Request Body_
```
{
    "amount": 3
}
```

_Request Response_:
_* Response(201)_
```
{
    "id": 11,
    "UserId": 3,
    "ProductId": 56,
    "status": "to cart",
    "amount": 3,
    "createdAt": "2020-07-01T11:01:20.578Z",
    "updatedAt": "2020-07-01T11:01:20.578Z"
}
```

## DELETE /products/:id/transaction
_Request Header_
```
{
    "token": <add your token>
}
```
_Request Body_
```
not needed
```

_Request Response_:
_* Response(201)_
```
{
    "message": "Product transaction successfully deleted",
}
```

## GET /products/1
_Request Header_
```
{
    "token": <your token> 
}
```

_Request Body_
```
not needed
```

_Request Response_
_*Response(200)_
```
[
    {
        "id": 11,
        "UserId": 3,
        "ProductId": 56,
        "status": "to cart",
        "amount": 3,
        "createdAt": "2020-07-01T11:01:20.578Z",
        "updatedAt": "2020-07-01T11:01:20.578Z"
    },
    ...
]
```

## PUT /transaction
_Request Header_
```
{
    "token": <add your token>
}
```
_Request Body_
```
not needed
```

_Request Response_:
_* Response(201)_
```
{
    "message": "Transaction successfully paid",
}
```
