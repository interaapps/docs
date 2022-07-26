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

$router->notFound(function (Request $req, Response $res) {
    return "This page was not found!";
});

// Using functions with the new PHP8.1 syntax (the three dots need to be there)
$router->get("", myFunction(...));
$router->get("", MyClass::myMethod(...));
$router->get("", $myObject->myMethod(...));


// Multiple HTTP-Methods
$router->addRoute("/multiple", "GET|POST|PUT", myFunction(...));

// Runs the router
$router->run();
```