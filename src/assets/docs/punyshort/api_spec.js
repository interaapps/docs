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


const domain = {
    "id": {type: 'string', description: '', example: "pnsh"},
    "name": {type: 'string', description: '', example: "pnsh.ga"},
    "is_active": {type: 'boolean', description: '', example: "true"},
    "is_public": {type: 'boolean', description: '', example: "true"},
    "locked": {type: 'boolean', description: '', example: "false"},
}

const domain_type = {
    type: 'Domain',
    description: '',
    example: ''
}

const shorten_link = {
    "id": {type: 'string', description: '', example: "X2VuN8r2"},
    "type": {type: 'enum', description: '', values: ["SHORTEN_LINK"], example: 'SHORTEN_LINK'},
    "long_link": {type: 'string', description: '', example: 'https://interaapps.de/very-long-link'},
    "path": {type: 'string', description: '', example: 'NcewnfHsd'},
    "domain": {type: 'string', description: '', example: ''},
}

const shorten_link_type = {
    type: 'ShortenLink',
    description: '',
    example: ''
}

const shorten_link_create = {
    "type": {type: 'enum', description: '', values: ["SHORTEN_LINK"], example: 'SHORTEN_LINK'},
    "domain": {type: 'string', description: 'Id of a domain', example: 'pnsh', required},
    "path": {type: 'string', description: 'The path of the shorten link. Null for random', example: null},
    "long_link": {type: 'string', description: 'Long link', example: 'https://interaapps.de/very-long-link', required},
}

const shorten_link_edit = {
    "domain": {...shorten_link_create.domain, required: false},
    "path": {...shorten_link_create.path, required: false},
    "long_link": {...shorten_link_create.long_link, required: false},
}
arrayOf;


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
    name: "Punyshort",
    baseUrl: 'https://api.punyshort.ga/v2',

    urls: [
        "Shorten Links",
        {
            name: "Shorten link",
            url: "/shorten-links",
            method: "POST",
            request: shorten_link_create,
            response: shorten_link,
            headers: fDH()
        },
        {
            name: "Get shorten links",
            url: "/shorten-links",
            method: "GET",
            query: {
                show_compact_stats: {type: 'string', description: 'Adds an compact_stats object to the entries with some link stats', example: ""}, 
                order_by: {type: 'string', description: '', example: ""}, 
                order_desc: {type: 'string', description: '', example: ""}, 
            },
            response: {
                'data': arrayOf(shorten_link_type, [{...shorten_link}])
            },
            headers: fDH()
        },
        {
            name: "Get shorten link",
            url: "/shorten-links/:id",
            method: "GET",
            response: shorten_link,
            headers: fDH()
        },
        {
            name: "Edit shorten link",
            url: "/shorten-links/:id",
            method: "PUT",
            request: shorten_link_edit,
            response: shorten_link,
            middleware: ["auth"],
            headers: fDH({Authorization})
        },
        {
            name: "Delete shorten link",
            url: "/shorten-links/:id",
            method: "DELETE",
            response: {success},
            middleware: ["auth"],
            headers: fDH({Authorization})
        },

        "Domains",
        {
            name: "Get accessable domains",
            url: "/domains",
            method: "GET",
            query: {
                order_by: {type: 'string', description: '', example: ""}, 
                order_desc: {type: 'string', description: '', example: ""}, 
            },
            response: {
                'data': arrayOf(domain_type, [{...domain}])
            },
            headers: fDH()
        },
        {
            name: "Get domain",
            url: "/domains/:id",
            method: "GET",
            response: domain,
            headers: fDH()
        },
        {
            name: "Delete domain",
            url: "/domains/:id",
            method: "DELETE",
            response: {success},
            middleware: ["auth"],
            headers: fDH({Authorization})
        },
    ]
}