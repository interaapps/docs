`GET` https://accounts.interaapps.de/api/v2/user

Header: x-auth-key: ACCESS-TOKEN

```js
{
    "success": true,
    "id": 99,
    "name": "ExampleUser",           // user.name:read
    "mail": "example@interaapps.de", // user.mail:read
    "favorite_color": "#4542F4",     // user.favoritecolor:read
    "description": "Hello world",    // user.description:read
    "profile_picture": "URL",        // user.profilepicture:read
    "birthday": "2000-01-11"         // user.name:read
}
```
[Read more about permissions](permissions.md)