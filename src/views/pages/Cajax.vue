<template>
    <div class="contents">
        <div class="big-code-sample" style="margin-top: 100px"><pre><code class="language-js">{{codes[0]}}</code></pre></div>
        <div id="big-title">
            <h1>
                Cajax
            </h1>
            <div>
                <router-link class="button" to="/docs/cajax">Docs</router-link>
                <a class="button" href="https://github.com/interaapps/cajax">GitHub</a>
            </div>
        </div>
        <br><br><br><br>

        <div id="markdown-contents">
            <div class="big-code-sample" ><pre><code class="language-js">{{codes[1]}}</code></pre></div>
            <h1 style="padding-top:0px">Installation</h1>
            <p>
                You can install Cajax for multiple environment.<br>For plain js, module js, node js (Webpack) or Deno.
            </p>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    </div>
</template>
<script>
import Prism from 'prismjs';
require('prismjs/components/prism-javascript')
export default {
    data: ()=>({
        codes: [
            `import Cajax from '...'
const client = new Cajax("https://ping.intera.dev")

const res = await client.get("/")
console.log(\`Hello \${res}\`)`,

    `//html:
<script src="http://js.gjni.eu/cajax/3.0.4.js"><`+`/script>

//js (module or Deno):
import Cajax from 'http://js.gjni.eu/cajax/3.0.4/Cajax.js'

//npm:
npm install cajaxjs

import { Cajax } from 'cajaxjs'`
        ]
    }),
    mounted(){
        Prism.highlightAll();
    }
}
</script>