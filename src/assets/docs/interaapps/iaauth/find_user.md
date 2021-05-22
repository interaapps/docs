# Filtering a user
`POST` https://accounts.interaapps.de/iaauth/api/finduser
#### body
```json
{
        "key": "API_KEY",
        "query": [ [ "name" /*field*/, "=" /*operator*/, "homersimpson" ] /*More...*/ ]
}
```
#### Return
```json
{
    "userkey": "", // Get the first user
    "users": []
}
```

## Operators
Operator |
- |
\>|
<|
\>=|
<=|
LIKE|