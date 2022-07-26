
## Creating Model
A model is a class that must use the `ORMModel` trait. You can set the table name with the Table attribute.
```php
namespace com\example\myproject\model;

use de\interaapps\jsonplus\JSONModel;
use de\interaapps\ulole\orm\attributes\Column;
use de\interaapps\ulole\orm\attributes\Table;
use de\interaapps\ulole\orm\attributes\CreatedAt;
use de\interaapps\ulole\orm\attributes\UpdatedAt;
use de\interaapps\ulole\orm\attributes\DeletedAt;
use de\interaapps\ulole\orm\ORMHelper;
use de\interaapps\ulole\orm\ORMModel;

#[Table("users")]
class User {
    use ORMModel;
    use ORMHelper; // Adds more ORM-Helper like User::all() and User::get(id)
    use JSONModel; // Adds $user->json() and User::fromJson("{...}")

    #[Column]
    public int $id;

    #[Column]
    public string $name;

    #[Column]
    public string $password;

    #[Column]
    public string $gender;

    #[Column(sqlType: 'TIMESTAMP')]
    #[CreatedAt] // This field will be set to the current date if the object is saved to the database for the first time
    public string $createdAt;

    #[Column(sqlType: 'TIMESTAMP')]
    #[CreatedAt] // This field will be set to the current date if the object is being updated
    public string $updatedAt;

    #[Column(sqlType: 'TIMESTAMP')]
    #[DeletedAt] // This field will be set to the current date if the object is being deleted
    public string $deletedAt;
}
```

## The Column Attribute
```php
#[Column(
    name: "sql_column_name",
    sqlType: "TEXT", // The SQL type (used in auto migration)
    size: 255, // Can also be a string
    index: false, // Create an index on auto migration
    id: false, // Is this field the id field? Default true for $id
    unique: false
)]
```

## Registering model
```php
UloleORM::register(User::class);
```