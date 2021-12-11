<template>
    <div class="contents">
        <div id="big-title">
            <h1>
                Ping - Pong!
            </h1>
            <div>
                <router-link class="button" to="/docs/ping">Docs</router-link>
                <a class="button" href="https://github.com/interaapps/ping.intera.dev">GitHub</a>
            </div>
        </div>
        <br><br><br><br>

        <div id="markdown-contents">
            <div class="big-code-sample"><pre><code class="language-http">{{codes[0]}}</code></pre></div>
            <h1 style="padding-top:0px">What?</h1>
            <p>
                ping.intera.dev is a http testing Tool.<br> It will give you your http request as a json object.<br>There are also more tools which help you having fun with http!
            </p>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


    </div>
</template>
<script>
import Prism from 'prismjs';
require('prismjs/components/prism-http')
export default {
    data: ()=>({
        codes: [
            `GET https://ping.intera.dev
Content-Type: application/json

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
    "query": {
        
    },
    "cookies": [
        
    ],
}
`
        ]
    }),
    mounted(){
        Prism.highlightAll();
    }
}
</script>