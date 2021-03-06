# CAJAX (*ClassedAjax*) 3.0.2
CajaxJS is an lightweight JS Http client for everyone!

[Installation](.)

## CDN
test.js
```javascript
import { Cajax } from 'https://cdn.jsdelivr.net/npm/cajaxjs@3.0.2/index.js'
// Deno: import Cajax from 'https://deno.land/x/cajax@3.0.2/Cajax.js'
new Cajax()
    .get("https://interaapps.de")
    .then(res => {
        console.log(res.text())
    })
```

## Example Usage
```js
import { Cajax, CajaxRequest, CajaxResponse, FetchRequestProvider } from 'https://cdn.jsdelivr.net/npm/cajaxjs@3.0.2/index.js'

const client = new Cajax()

// There are currently two RequestProvider. Cajax automaticly selects the best one for the user
client.requestProvider = new FetchRequestProvider()

// Await needs to be in a async scope
const response = await client.get("https://interaapps.de")
const responseText = await response.text();
console.log(responseText)

// Using query parameters
client.get("https://interaapps.de", {
    hello: "world"
})
    .then(res=>text())
    .then(res=>{
        console.log("Hello world")
    })

// Adding headers
client.get("https://interaapps.de", {
    hello: "world"
}, {
    headers: {
        hello: "World (But this is a header)"
    }
})

// Posting. The second parameter is the data
client.post("https://interaapps.de", {
    hello: "world"
})
```

## options
```js
/*
    You can either set your options into the third parameter of a request or just set it for the whole client
*/

const client = new Cajax("https://interaapps.de/base_url", {
    headers: {
        hello: "World"
    },

    // Might be interesting for PHP-Developers
    contentType: "application/x-www-form-urlencoded"
})

// Or you can set it here
client.setHeader("hello", "world")

// Helper
client.bearer("KEY")

// You are always converting data to json or check it before using it? Then you can use promiseInterceptor
// This will now convert every following res to a json object.
client.promiseInterceptor = res => res.json()
```


## Typescript usage
```typescript
new Cajax().get("https://interaapps.de")
    .then(await (res: CajaxResponse) => {
        console.log("Hello "+(await res.json()).name)
    })
```