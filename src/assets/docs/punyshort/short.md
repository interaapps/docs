# Short
Short a link.

<br><br>
`POST https://punyshort.ga/api/v2/short`
<br><br>Parameters<br>
```json
link: "https://interaapps.de"
domain: "pnsh.ga"
```
<!--
<br><br>
`GET https://punyshort.ga/api/v2/short`
<br><br>Parameters<br>
```json
link: "https://interaapps.de"
```
`example: https://punyshort.ga/api/v2/short?link=https://interaapps.de`
-->
<br><br>
Return `JSON`:
<br><br>
```json
{
    "link": "i",
    "full_link": "https://pnsh.ga/i",
    "error": 0
}
```

# Code-Examples
## Javascript
```javascript
// Using Cajax.js
Prajax.post("https://punyshort.ga/api/v2/short", {
    link: "https://interaapps.de"
}).then((resp)=>{
    var response = JSON.parse(resp.responseText);
    console.log("Link: "+response.link_full);
});


// Using fetch
fetch("https://www.punyshort.ga/api/v2/short", {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        link: "https://developers.interaapps.de"
    })
})
    .then(res => res.json())
    .then(res => {
        
    })
```

## PHP
```php
$postdata = http_build_query(
    [
        'link' => 'https://developers.interaapps.de'
    ]
);

$context = stream_context_create(['http' =>
    [
        'method'  => 'POST',
        'header'  => 'Content-Type: application/x-www-form-urlencoded',
        'content' => $postdata
    ]
]);


$result = json_decode(file_get_contents('https://punyshort.ga/api/v2/short', false, $context));
echo "Link: ".$result->full_link;
```

## PHP (UPPM-Library)
[You can get the library here](https://github.com/uppm/punyshort-lib)
```php
use modules\punyshort\Punyshort;

$pnsh = new Punyshort();
echo $pnsh->short("https://developers.interaapps.de")->getLink();
```


## Python
```python
link = "https://interaapps.de"

import urllib.request, json
with urllib.request.urlopen("https://punyshort.ga/api/v2/short?link="+urllib.parse.quote(link)) as url:
    data = json.loads(url.read().decode())
print("Link: "+data["full_link"])
```