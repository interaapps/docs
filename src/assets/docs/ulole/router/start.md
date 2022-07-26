```php
$router = new Router();

// When the user visits / this will be called and the user get to see Hello World
$router->get("/", function (Request $req, Response $res) {
    return "Hello World!";
});

// It also supports regex and fills it as parameters
$router->get("/(d+)", function (Request $req, Response $res, int $userId) {
    return "Your Id: " . $userId . "!";
});

$router->addRoute("/multiple/http/methods", "GET|POST|PUT", myFunction(...));

$router->notFound(function (Request $req, Response $res) {
    return "This page was not found!";
});

// Runs the router
$router->run();
```