Finished creating your project? Now you need to set some things up so the project can run.

## .env
Copy the .env.example into a new .env file. Here are some variables you want to change. Like setting the database credentials.
```properties
DATABASE_DRIVER=mysql
DATABASE_USERNAME=root
DATABASE_PASSWORD=1234
DATABASE_DATABASE=testing
DATABASE_SERVER=localhost
```

## I don't want to use a database
If you don't want to use any database you can remove the line in your App.php
```php
$this->initDatabase(/*Config prefix*/ "database" /*, "main" (Default) */);
``` 
Now no database connection will be made

## Starting app
```bash
$ php cli serve
[Tue Jul 26 16:44:48 2022] PHP 8.1.8 Development Server (http://0.0.0.0:8000) started
```

### Info: If you use uppm, you can use the command
```bash
uppm serve
```