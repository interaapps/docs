
ping.intera.dev is an http testing Tool.<br> It will give you your http request as a json object.<br>There are also more tools which help you having fun with http!

## Domains
There are two testing domains:
- ping.intera.dev
- pong.intera.dev

Both will do the same.

### A simple `GET` [/](https://ping.intera.dev/)

##### Response:
```json
{
  "method": "GET",
  "protocol": "HTTP/1.0",
  "domain": "pong.intera.dev",
  "ssl": false,
  "uri": "/",
  "full_url": "http://pong.intera.dev/",
  "headers": {
    ...
  },
  "query": { },
  "cookies": [ ],
}
``` 

### A simple `Post` [/](https://ping.intera.dev/)

##### Request:
```json
Content-Type: application/json

{
    "hello": "world"
}
```

##### Response:
```json
{
  "method": "GET",
  "protocol": "HTTP/1.0",
  "domain": "pong.intera.dev",
  "ssl": false,
  "uri": "/",
  "full_url": "http://pong.intera.dev/",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "\"hello\": \"world\"",
  "query": { },
  "cookies": [ ],
}
``` 