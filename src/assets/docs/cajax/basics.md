## Sending a simple HttpRequest
```javascript
Cajax.get("https://pastefy.ga/MSHAeF41/raw").then(res=>{
    console.log(res.responseText) // Logs the response body
}).send()

// or in Prajax (That's what we use for the following code examples):

Prajax.get("https://pastefy.ga/MSHAeF41/raw").then(res=>{
    console.log(res.responseText) // Logs the response body
}) 
```

## Sending a HttpReq. with params
```javascript
Prajax.get("https://pastefy.ga/TR15NeHh/raw", {
    password: "cool"
}).then(res=>{
    console.log(res.responseText) // Logs the response body
}) 
```

## Sending a post-request
```javascript
//       \/ This is Method (GET|POST|DELETE|PUT|TRACE|CONNECT|UPDATE|OPTIONS)
Prajax.post("https://developers.interaapps.de", {
    hello: "world"
}).then(res=>{
    console.log(res.responseText) // Logs the response body
}) 
```

## Sending a request with headers
```javascript
//       \/ This is Method (GET|POST|DELETE|PUT|TRACE|CONNECT|UPDATE|OPTIONS)
Prajax.post("https://developers.interaapps.de", {}, {headers: {"x-key":"test-header"}).then(res=>{
    console.log(res.responseText) // Logs the response body
}) 
```
