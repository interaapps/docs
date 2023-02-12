function arrayOf(t, jsonExample = undefined){
    if (Array.isArray(jsonExample)){
        for (const i in jsonExample){
            for (const key in jsonExample[i]) {
                jsonExample[i][key] = jsonExample[i][key].example
            }
        }
    } else {
        for (const key in jsonExample) {
            jsonExample[key] = jsonExample[key].example
        }
    }
    return {
        ...t,
        type: t.type+"[]",
        jsonExample
    }
}

const required = true

const paste = {
    "id": {type: 'string', description: '', example: "X2VuN8r2"},
    "type": {type: 'enum', description: '', values: ["PASTE", "MULTI_PASTE"], example: 'PASTE'},
    "title": {type: 'string', description: '', example: 'test.js'},
    "content": {type: 'string', description: '', example: 'console.log("Hello World")'},
    "encrypted": {type: 'boolean', description: '', example: ''},
    "exists": {type: 'boolean', description: '', example: true},
    "raw_url": {type: 'string', description: '', example: "/X2VuN8r2/raw"},
    "created_at": {type: 'string', description: '', example: "2022-02-01 16:03:09.0"},
    "expire_at": {type: 'string', description: '', example: null},
    "user_id": {type: 'string', description: '', example: ''},
}

const paste_type = {
    type: 'Paste',
    description: '',
    example: ''
}

const paste_create = {
    "type": {type: 'enum', description: '', values: ["PASTE", "MULTI_PASTE"], example: 'PASTE'},
    "title": {type: 'string', description: '', example: 'test.js', required},
    "content": {type: 'string', description: '', example: 'console.log("Hello World")', required},
    "visibility": {type: 'enum', description: 'UNLISTED is default', values: ["UNLISTED", "PUBLIC", "PRIVATE"], example: 'UNLISTED'},
    "encrypted": {type: 'boolean', description: '', example: ''},
    "expire_at": {type: 'string', description: 'optional. null for no expiration', example: "2022-02-01 16:03:09.0"}
}

const paste_edit = {
    "type": paste_create.type,
    "title": {...paste_create.title, required: false},
    "content": {...paste_create.content, required: false},
    "visibility": {...paste_create.visibility, required: false},
    "expire_at": {...paste_create.expire_at, required: false},
    "encrypted": paste_create.encrypted,
}

const folder_type = {
    type: 'Folder',
    description: '',
    example: ''
}

const folder = {
	"id": {type: 'string', description: '', example: "vZoF4hIZ"},
	"name": {type: 'string', description: '', example: 'my folder'},
	"user_id":paste.user_id,
	"children": arrayOf(folder_type, []),
	"exists": paste.exists,
	"pastes": arrayOf(paste_type, [{...paste}]),
    "created_at": paste.created_at
}

const notification = {
    "id":1,
    "message":{type: 'string', description: '', example: "Someone send you something"},
    "url":{type: 'string', description: '', example: "/"},
    "user_id":paste.user_id,
    "already_read":{type: 'boolean', description: '', example: "false"},
    "received":{type: 'boolean', description: '', example: "false"},
    "created_at":paste.created_at,
    "updated_at":paste.created_at
}

notification;

const notification_type = {
    type: 'Notification',
    description: '',
    example: ''
}
notification_type;


// fromDefaultHeaders
function fDH(headers = {}){
    return {
        Accept: {type: 'mimetype(json, yaml, formdata)', description: 'Response Content-Type of body', example: 'application/json (Default)'},
        'Content-Type': {type: 'mimetype(json, yaml, formdata)', description: 'Request-Content Type of body', example: 'application/json (Default)'},
        ...headers
    }
}

const Authorization = {type: 'string', description: 'Bearer Authorization Header', example: 'Authorization: Bearer {Value}'}
const success = {type: 'boolean', description: 'Is the request been successful?', example: true}

export default {
    name: "Pastefy",
    baseUrl: 'https://pastefy.ga',

    urls: [
        "Pastes",
        {
            name: "Create paste",
            url: "/api/v2/paste",
            method: "POST",
            request: paste_create,
            response: {success, paste: paste_type},
            middleware: ["auth"],
            headers: fDH({Authorization})
        },
        {
            name: "Get paste",
            url: "/api/v2/paste/:id",
            method: "GET",
            response: paste,
            headers: fDH()
        },
        {
            name: "Edit paste",
            url: "/api/v2/paste/:id",
            method: "PUT",
            request: paste_edit,
            response: {success, paste: paste_type},
            middleware: ["auth"],
            headers: fDH({Authorization})
        },
        {
            name: "Delete paste",
            url: "/api/v2/paste/:id",
            method: "DELETE",
            response: {success},
            middleware: ["auth"],
            headers: fDH({Authorization})
        },

        "Folder",

        {
            name: "Create folder",
            url: "/api/v2/folder",
            method: "POST",
            request: {
                "name": {...folder.name, required},
            },
            response: {success, folder: folder_type},
            headers: fDH({Authorization})
        },
        {
            name: "Get folder",
            url: "/api/v2/folder/:id",
            method: "GET",
            response: folder,
            headers: fDH()
        },
        {
            name: "Edit folder",
            url: "/api/v2/folder/:id",
            method: "PUT",
            request: {
                "name": folder.name,
            },
            response: {success, folder: folder_type},
            headers: fDH({Authorization})
        },
        {
            name: "Delete folder",
            url: "/api/v2/folder/:id",
            method: "DELETE",
            response: {success},
            headers: fDH({Authorization})
        },

        "User",

        {
            name: "Get user",
            url: "/api/v2/user",
            method: "GET",
            response: {
                id: {type: 'string', description: '', example: "asdf324r"},
                name: {type: 'string', description: '', example: "ThisIsMe"},
                profile_picture: {type: 'string', description: '', example: "vZoF4hIZ"},
                color: {type: 'string', description: 'The users favorite color', example: "vZoF4hIZ"},
                logged_id: {type: 'boolean', description: '', example: true}
            },
            headers: fDH({Authorization})
        },


        "Public Pastes",
        {
            name: "Get all public pastes",
            url: "/api/v2/public-pastes",
            method: "GET",
            query: {
                page: {type: 'string', description: 'Page', example: ""}, 
                page_size: {type: 'string', description: 'Page size', example: ""}, 
                search: {type: 'string', description: 'Search query', example: ""}, 
                shorten_content: {type: 'string', description: 'If true shorten the paste contents', example: ""}
            },
            response: {
                '$root': arrayOf(paste_type, [{...paste}])
            },
            headers: fDH()
        },
        {
            name: "Get trending",
            url: "/api/v2/public-pastes/trending",
            method: "GET",
            query: {
                page: {type: 'string', description: 'Page', example: ""}, 
                page_size: {type: 'string', description: 'Page size', example: ""}, 
                trending: {type: 'string', description: 'If true limit pastes to lately treding', example: ""}, 
                shorten_content: {type: 'string', description: 'If true shorten the paste contents', example: ""}
            },
            response: {
                '$root': arrayOf(paste_type, [{...paste}])
            },
            headers: fDH()
        },
        {
            name: "Get latest",
            url: "/api/v2/public-pastes/trending",
            method: "GET",
            query: {
                page: {type: 'string', description: 'Page', example: ""}, 
                page_size: {type: 'string', description: 'Page size', example: ""}, 
                shorten_content: {type: 'string', description: 'If true shorten the paste contents', example: ""}
            },
            response: {
                '$root': arrayOf(paste_type, [{...paste}])
            },
            headers: fDH()
        },

        "Folder",

        {
            name: "Get notifications",
            url: "/api/v2/user/notification",
            method: "GET",
            description: `Returns array of notifications`,
            query: {
                not_read: {type: 'string', description: 'if set it shows only not already received notifications', example: ""},
                not_received: {type: 'string', description: 'if set it shows only non received notifications', example: ""},
            },
            
            headers: fDH({Authorization})
        },
    ]
}