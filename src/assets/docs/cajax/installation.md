# Installation
## NPM
```bash
npm install cajaxjs
```

## CDN
```html
<script src="https://cdn.jsdelivr.net/npm/cajaxjs@x/dist/cajax.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/cajaxjs@3.0.4/dist/cajax.js"></script>
```

## CDN (module, works for Deno too)
test.js
```javascript
import { Cajax } from 'https://cdn.jsdelivr.net/npm/cajaxjs@3.0.4/index.js'

new Cajax()
    .get("https://interaapps.de")
    .then(async (res) => {
        console.log(await res.text())
    })
```