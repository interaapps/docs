# Key
You can get your API-Key from https://pastefy.ga/apikeys
Header:
```
x-auth-key: YOUR-API-KEY
```

# Paste Requests


### `POST` https://pastefy.ga/api/v2/paste
Request Example
```json
{
	"title": "test.txt",
	"content": "Hello world :)",
	"encrypted": false // Client Encryption enabled
}
```
Returns
Response: [#Paste](#paste)
```json
{
	"success": true,
	"paste": #Paste Response
}
```

### `GET` https://pastefy.ga/api/v2/paste/{id}
Response: [#Paste](#paste)
Example:
```json
{
	"id":"A9aK4sU0",
	"title": "",
	"content": "",
	"encrypted": false,
	"user_id": 53,
	"created": "2021-01-31 19:55:33.0",
	"exists":true
}
```

### `DELETE` https://pastefy.ga/api/v2/paste/{id}
Example:
```json
{
	"success":true
}
```

# Folder Requests
### `POST` https://pastefy.ga/api/v2/folder
Request Example
```json
{
	"name": "example"
}
```
Returns
Response: [#Folder](#folder)
```json
{
	"success": true,
	"paste": #Folder Response
}
```

### `GET` https://pastefy.ga/api/v2/folder/{id}
Response: [#Folder](#folder)
Example:
```json
{
	"id":"vZoF4hIZ",
	"name":"Hello world!",
	"user_id":53,
	"children":[],
	"exists":true,
	"pastes":[
		{
			"id":"ABABABAB",
			"title":"Ye",
			"content":"Hello world",
			"folder":"vZoF4hIZ",
			"encrypted":false,
			"user_id":53,
			"exists":true,
			"created":"2021-01-31 	19:13:49.0"
		}
	]
}
```


### `DELETE` https://pastefy.ga/api/v2/folder/{id}
Example:
```json
{
	"success":true
}
```
# User

### `GET` https://pastefy.ga/api/v2/user
Example:
```json
{
	"id":1,
	"name":"ImANiceUser",
	"profile_picture":"",
	"color":"#fb1740",
	"logged_in":true
}
```

### `GET` https://pastefy.ga/api/v2/user/notification
URL-Params
Key|Description
-|-
alreadyRead|if set it shows only not already received notifications
already_read|if set it shows only non read notifications 

The Request sets every notification to received

Example:
```json
[
	{
		"id":1,
		"message":"Message contents",
		"url":"/",
		"user_id":53,
		"already_read":false,
		"received":false,
		"created_at":"2021-01-31 22:14:50",
		"updated_at":"2021-01-31 22:14:50"
	}
]
```

# Responses

### Paste
Name|Type|Description
---|---|---
id|String(8)|Identifier
title|String|
content|String|
encrypted|boolean|We are using CryptoJS for client-encryption. This indicates if it's client-encrypted
user_id|int|
folder|String|
created|String/Timestamp|

### Folder
Name|Type|Description
---|---|---
id|String(8)|Identifier
name|String|
user_id|int|
children|List\<Folder>|
pastes|List\<Paste>|
created|String/Timestamp|