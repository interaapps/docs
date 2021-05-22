<img src="/img/screenshots/oauth-flow.svg" alt="OAuth2 Flow" width="800"/>

## Create an OAuth2 App
Go to [the InteraApps Developer Center](https://accounts.interaapps.de/developers/projects) and create a project. In it you can create your OAuth2 app. On the apps' page you get a client_id and a client_secret which you are going to need. 

## Authorization Grant URL
You can create an Authorization-URL with the URL-Creator in the developer center or create it your self with the OAuth2 standard

### Standard
Name|Description|Example
---|---|---
client_id|The client_id of your app|38c54n283
scope|A scope list seperated by a space [List of scopes](/docs/accounts/permissions)|user.description:read user.mail:read
redirect_uri|The redirect URL where the user is sent to (Default: redirecturl set in your app)|https://pastefy.ga/interaapps/callback
state|Something that is being redirected in the url|helloapp

> Keep in mind that every information should be URL-Encoded

### Example URL
```
https://accounts.interaapps.de/auth/oauth2?client_id=1&redirect_uri=https%3A%2F%2Fpastefy.ga%2Finteraapps%2Fcallback&scope=user.description%3Aread%20user.mail%3Aread&state=helloapp
```
Beautified
```
https://accounts.interaapps.de/auth/oauth2
  ?client_id=1
  &redirect_uri=https%3A%2F%2Fpastefy.ga%2Finteraapps%2Fcallback
  &scope=user.description%3Aread%20user.mail%3Aread
  &state=helloapp
```

## Retreiving an Access-Token
The authorization screen is redirecting the user via the redirect_uri back to your app with a query parameter called `code`
> Example: https://pastefy.ga/interaapps/callback?code=CODE123

With this code you can get an access token with which you can access user information.
You need to send a POST request to `https://accounts.interaapps.de/api/v2/authorization/oauth2/access_token`

## Example
### Request:
```js
POST https://accounts.interaapps.de/api/v2/authorization/oauth2/access_token
Content-Type application/json

{
    "client_id": "YOUR-CLIENT-ID",
    "client_secret": "YOUR-CLIENT-ID",
    "code": "CODE123" // The code given by the redirection
}
```
### Response:
With the access_token you can access the users information or do other actions onto the account if the scopes allow it. With the refresh_token you can refresh the access_token if it is expired (Same procedure as after the redirection with the code). 
```js
{
    "success": true,
    "access_token": "AT-1-ACCESS-TOKEN",
    "refresh_token": "REFRESH-TOKEN",
    "scopes": "user.description:read,user.mail:read", 
    "scope_list": [
        "user.description:read", 
        "user.mail:read"
    ]
}
```

## Conclusion
With the access token you can now do what ever you want. Read [getting user information](/docs/accounts/getting-user-information) to know how to use the access_token to get some user information

# Libraries
## Using JavaScript Library
With the Javascript Library you can build a redirect-link or a popup window
```html
<button onclick="interaAppsLogin()">CLICK ME</button>
<script src="https://js.gjni.eu/accounts/oauth2.js"></script>
<script>
    function interaAppsLogin() {
        const ia = new IAOAuth2("CLIENT_ID")
        ia.addScope("user")
        ia.setRedirect("/authenticate")
        
        // Uses an usual redirection
        ia.open()

        // Opens a popup and returns a Promise
        ia.openInNewWindow() // Optional: The first parameter could be a redirection link which you'll see in the popup window for a few milliseconds. 
            .then(res => {
                console.log(res)
                console.log(res.code) // "code" is what you usually would get from a redirection as a query parameter
            })
    }
</script>
```
Example for openInNewWindow():
<img src="/img/screenshots/oauth2-login.png" alt="Login" width="400"/>

## Other
- [Javawebstack Passport](https://github.com/javawebstack/Passport#services)
