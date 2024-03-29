Every ulole app has a class extending WebApplication where everything gets set up like database models or routes.

If you generated a project, you'll find an App.php
```php
namespace com\example\myproject;

use com\example\myproject\controller\SecondTestController;
use com\example\myproject\controller\TestController;
use com\example\myproject\model\User;
use de\interaapps\ulole\core\jobs\JobModel;
use de\interaapps\ulole\orm\UloleORM;
use de\interaapps\ulole\core\Environment;
use de\interaapps\ulole\core\WebApplication;
use de\interaapps\ulole\core\traits\Singleton;
use de\interaapps\ulole\router\Request;
use de\interaapps\ulole\router\Response;

class App extends WebApplication {
    use Singleton;

    public function __construct() {
        self::setInstance($this);
    }

    /**
     * Global init. It'll be used for the web, cli and other places.
     * Handle databases (and other connections), configurations and more here.
     */
    public function init() : void{
        $this->getConfig()
            ->loadENV() // Loads environment variables
            // If the file doesn't exists it'll just ignore it without any exception!
            ->loadPHPFile("env.php")    // Uses the returned array in a php file
            ->loadENVFile(".env")       // A simple .enva file
            ->loadJSONFile("env.json"); // Using a json file

        $this->initDatabase(/*Config prefix*/ "database" /*, "main" (Default) */);

        // Registering models
        UloleORM::register(User::class);

        // If you want to use Jobs
        UloleORM::register(JobModel::class);
        $this->getJobHandler()->setMode("database"); // You can choose "sync" as well
    }

    /**
     * This'll be called before running the app for the web.
     * Handle routes, views and other stuff needed for running for the web here.
     */
    public function run() : void {
        $router = $this->getRouter();

        $router
            ->get("/a/(.*)", function(Request $req, Response $res, string $test = null){
                $res->json([
                    "Yep" => $test
                ]);
            });

        $router->notFound(function(){
            view("error", ["error" => "Page not found"]);
        });

        // Register controllers
        $router->addController(
            new TestController(),
            new SecondTestController(),
        );
    }

    public static function main(Environment $environment){
        (new self())->start($environment);
    }
}
```

## Starting the app
In `index.php` you may start the app with and set the index.php as entrypoint
```php
App::main(Environment::fromCurrent());
```