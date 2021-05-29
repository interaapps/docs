The access-token is a max. 140 chars long String used to identify a user and give the user access to its account. 
<br>
An access-token could have restricted access to your account. For example if you are using OAuth2. The scopes would give you just some permissions. If you don't have any permission to an action you'll get an error with a `PermissionsDeniedException`

## Getting Auth-Key
### Using OAuth2
If you want to get specific permissions onto any users account you can use [OAuth2](oauth2) to gain an access token.


### Login with Username & Password
You can get an Auth-Key either by logging in via the API.
This method is **NOT** recommended. The usage might change and this method doesn't work if 2FA or other Login-Methods are enabled.

```js
POST https://accounts.interaapps.de/api/v2/auth/login
Content-Type: application/json

{
    "name":"UserName", // Your Username
    "password":"YourPassword"
}


RESPONSE
Content-Type: application/json

{
    "success":true,
    "auth_key": {
        "user_id": 1, // Your user id
        "success":true, // Did the request succeed?
        "id": 1, // Auth-Key ID (Not important)
        "key":"AUTH-KEY-ABCDEFGH...", // This is the needed Access Token
        "user_agent":{ // Some information about the session
            "browser":"Chrome",
            "operating_system":"Linux"
        }
    }
}
```

## How do I use it?
You either set a Bearer token or an header called `X-Auth-Key` to the Access Token.<br> An example would be [Getting User Information](getting-user-information)