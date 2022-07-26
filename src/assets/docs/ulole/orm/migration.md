## Auto Migration
AutoMigration takes the strucuture of the model and creates or updates the table in your database.
```php
UloleORM::register(User::class);

// Automigrates all models where the disableAutoMigrate is not set in the Table Attribute
UloleORM::autoMigrate();
```

> Using Ulole-Framework you can use the `php cli migrate:auto` command


## Manual Migration
Manual migrations may take time to set up, but let you manually create the table. This is more stable and controllable.

Using the ulole-framework, use the following command:
```bash
php cli create:migration create_users NEW
```

The first argument is the name of the migration file and the second is the type of migration. It can be NEW (for insert) or EDIT (for updating a table). 
This will create the following file `resources/migrations/migration_220726_170746_create_user.php`
```php
namespace resources\migrations;

use de\interaapps\ulole\orm\Database;
use de\interaapps\ulole\orm\migration\Blueprint;
use de\interaapps\ulole\orm\migration\Migration;

class migration_220726_170746_create_user implements Migration {
    public function up(Database $database) {
        // Creates a database
        return $database->create("users", function (Blueprint $blueprint) {
            // Setting the fields
            $blueprint->id();
            $blueprint->string("name")->default('John');
            $blueprint->enum("gender", ["FEMALE", "MALE", "OTHER", "NO_ANSWER"])->default('NO_ANSWER');
            $blueprint->timestamp("created_at")->currentTimestamp();
        });
    }

    // On php cli migrate:down
    public function down(Database $database) {
        return $database->drop("users");
    }
}
```
## How to migrate now?
```bash
# Adds the changes
php cli migrate:up

# Revokes last changes
php cli migrate:down
```

### Not using ulole-framework
```php
$migrator = new Migrator("main");
// Set echo logging
$migrator->setLogging(true);

// Add migrations from a folder
$migrator->fromFolder("resources/migrations");

// Add migration by class
$migrator->addMigrations(migration_201122_001143_create_user::class);

// Add changes
$migrate->up();

// Revoke last changes
$migrate->down();
```