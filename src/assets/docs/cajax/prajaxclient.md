## Creating a Prajax-Client instance
```javascript
// for deno users: import PrajaxClient from 'https://deno.land/x/cajax@1.1.1/PrajaxClient.js'

let prajaxClient = new PrajaxClient({
    baseUrl: "https://api.interaapps.de",
    // DEFAULT VALUES
    data: {
        hello: "world"
    },
    options: {
        headers: {
            "x-key": "a default header"
        }
    }
});

```

## Making a HttpRequest
This will send a `GET`-Request to https://api.interaapps.de/hello with the parameter hello and the header x-key
```javascript
prajaxClient.get("/hello").then(res=>{
    console.log(res.json())
})
```