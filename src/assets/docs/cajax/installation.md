# Installation

### Places to get Cajax from
- [CDN](#cdn)
- [Deno page](https://deno.land/x/cajax@1.1.1)
- [Github](https://github.com/interaapps/cajax)
- [Github (Releases)](https://github.com/interaapps/cajax/releases)

## Embed in webbrowser
See [CDN list](#cdn)
```html
<script src="https://js.gjni.eu/cajax.js"></script>
<!-- OR -->
<script src="https://js.gjni.eu/cajax/1.1.1.js"></script>
```

## Using as module in Javascript/Deno
```javascript
// Cajax
import Cajax from 'https://js.gjni.eu/cajax/src/Cajax.js' // deno users can use: https://deno.land/x/cajax@1.1.1/Cajax.js

// Prajax
import Prajax from 'https://js.gjni.eu/cajax/src/Prajax.js' // deno users can use: https://deno.land/x/cajax@1.1.1/Prajax.js

// Everything
import { Cajax, Prajax /*...*/ } from 'https://js.gjni.eu/cajax/index.js'
```
`keep in mind that you have to use the script tag with type="module"`
# CDN
- JSDelivr
    - `cajax.js (built & bundeled for browsers)` https://cdn.jsdelivr.net/npm/cajaxjs@1.1.1/dist/cajax.js
    - `index.js` https://cdn.jsdelivr.net/npm/cajaxjs@1.1.1/index.js
    - `Cajax.js (example class/module)` https://cdn.jsdelivr.net/npm/cajaxjs@1.1.1/src/Cajax.js
- unpkg
    - `cajax.js` https://unpkg.com/cajaxjs@1.1.1/dist/cajax.js
    - `index.js` https://unpkg.com/cajaxjs@1.1.1/index.js
    - `Cajax.js` https://unpkg.com/cajaxjs@1.1.1/src/Cajax.js
- js.gjni.eu (Hosted at InteraApps)
    - `cajax.js` https://js.gjni.eu/cajax/1.1.1.js
    - `index.js` https://js.gjni.eu/cajax/1.1.1/index.js
    - `Cajax.js` https://js.gjni.eu/cajax/1.1.1/src/Cajax.js