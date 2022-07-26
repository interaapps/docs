```php
#[Controller("/users")]
class UserController {
    #[Route("/[0-9]*", method: 'GET')]
    public function getUser(Request $req, Response $res, int $id) {
        // ...
        return $user;
    }
    
    #[Route("", method: 'POST')]
    public function getUser(Request $req, Response $res) {
        // ...
        return $userId;
    }
}
```

## Using the controller
```php
$router->addController(new UserController());
```