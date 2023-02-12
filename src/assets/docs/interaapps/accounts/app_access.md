You want to create an app for an InteraApps service like Pastefy, Quotysco or Punyshort?

InteraApps Accounts has an centralized endpoint for creating access tokens for the services named `InteraApps External Access`.

## How to use it?
This is showing how to use IAEA with Pastefy to get user pastes.

### Create an OAuth2 Prompt
Create an OAuth2 Prompt with the scope `{App client_id}|{scope}`. In this example we need `pastefy|pastes`. 

Other scopes could be `pastefy|folders` or `pastefy|notifications`.

![](https://i.ibb.co/WHx8q0K/Bildschirm-foto-2023-02-12-um-12-49-30.png)

### Retreiving App Access Token
Pseudocode
```js
// Retreiving access_token from user
const userAccessToken = http.post('https://accounts.interaapps.de/api/v2/authorization/oauth2/access_token', {
    body: {            
        client_id: 'MY_CLIENT_ID',
        client_secret: 'MY_CLIENT_SECRET',
        code: query.get('code')
    }
})

// Requesting an access token from the pastefy app
const json = http.get('https://accounts.interaapps.de/api/v2/oauth2/external/pastefy', {
    headers: {
        Authorization: `Bearer ${userAccessToken.access_token}`
    }
})
console.log(`Pastefy Access token is ${json.res}`)

// Using the access token
const pastes = http.get('https://pastefy.ga/api/v2/user/pastes', {
    headers: {
        Authorization: `Bearer ${json.res}`
    }
})

```

### IAEA App scopes
Scope `{APP client_id}|{scope}`
app|client_id|scopes|specific
--|--|--|--
Pastefy|pastefy|pastes, folders, notifications|:create, :read, :write, :edit, :delete
Quotysco|yqrvga9csv7b1zp|posts, blogs, following_blogs, files|:read, :write, :delete
Punyshort|punyshort|shorten_links, domains, notifications|:read, :write, :delete