## Receive and return JSON
deverm-router uses JSONPlus in the background so you can receive and return json easily.

```php
class UserCreateRequest {
    public ?string $name;
    public ?string $password;
}

class UserCreateResponse {
    public bool $success = false;

    #[Serialize("user_id")]
    public int $userId;
}

$router->post("/user", function (Request $req, Response $res) : UserCreateResponse {
    $userCreateRequest = $res->json(UserCreateRequest::class);

    $name = $userCreateRequest->name;

    // ...

    $userCreateResponse = new UserCreateResponse();
    $userCreateResponse->success = true;
    $userCreateResponse->userId = $userId;
    return $userCreateResponse;
});
```

## Making request
### Request
```http
POST localhost/user
Content-Type: application/json

{
    "name": "John",
    "password": "***"
}
```
### Response
```http
Content-Type: application/json

{
    "success": true,
    "user_id": 8432
}
```