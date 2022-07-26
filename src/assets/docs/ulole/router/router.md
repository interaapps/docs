Deverm-Router is a php router which makes creating well structured php projects easy without the hassle of creating thousands of .php files with ugly paths.

## Install with uppm
```bash
uppm i deverm
```

## Install with composer
```bash
composer require interaapps/deverm-router
```


## Example Project structure
- /
    - src/
        - routes.php
    - public/
        - index.php
        - .htaccess

### .htaccess
Create a `.htaccess` with these options and set the root directory in your web server to `public/`
```htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)$ index.php [QSA,L]
```

### index.php
```php
<?php
chdir("..");
require "src/routes.php";
```

### routes.php
[Example Routes file in Getting Started](router/start)