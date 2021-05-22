## Request
`PUT` https://accounts.interaapps.de/api/v2/user

Header: x-auth-key: ACCESS-TOKEN

```json
{
    "description": "Example description",  // user.description:edit
    "birthday": "2000-12-22",              // user.birthday:edit
    "favorite_color": "#FF0000" // user.favoritecolor:edit
}
```
[Read more about permissions](permissions.md)

## Response
```json
{
    "success": true
}
```

# Uploading a profile picture
`PUT` https://accounts.interaapps.de/api/v2/user/profile_picture

Request-Type: Multipart<br>
Parameters: file (Image (png or jpg), max 4mb)