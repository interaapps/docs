# Get Link Information

<br><br>
`GET https://punyshort.ga/api/v2/getinformation/{Link Name (Like: as7Xbs)}?domain={Domain (like pnsh.ga)}`
<br><br>
Response `JSON`:
<br><br>
```js
{
  "clicks": 6338,
  "click": {
    "2019-09-17": 532,
    "2019-09-18": 653,
    "2019-09-19": 412,
    "2019-09-20": 345,
    "2019-09-21": 436,
    "2019-09-22": 269,
    "2019-09-23": 120,
    "2019-09-24": 94,
    "2019-09-25": 65,
    "2019-09-26": 36
  },
  "browser": {
    "Chrome": 4165,
    "Firefox": 904,
    "Safari": 372,
    "Opera": 126,
    "Netscape": 1,
    "Maxthon": 0,
    "Konqueror": 0,
    "Handheld Browser": 0,
    "Internet Explorer": 70,
    "Unknown": 700
  },
  "os": {
    "Windows": 5589,
    "Mac OS": 338,
    "Linux": 100,
    "ios": 245,
    "Android": 55,
    "Other": 11
  },
  "countries": {
    "United States": 2060,
    "Germany": 1338,
    "America":2504,
    "other": 436
  },
  "error": 0
}
```


# Code-Examples

## PHP (UPPM-Library)
[You can get the library here](https://github.com/uppm/punyshort-lib)
```php
use modules\punyshort\Punyshort;

$pnsh = new Punyshort();
$info = $pnsh->getLink("abcabc");

echo $info->getClicks();

```


