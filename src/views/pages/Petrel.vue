<template>
    <div class="contents">
        <div id="big-title">
            <h1>
                Petrel
            </h1>
            <div>
                <router-link class="button" to="/docs/petrel">Docs</router-link>
                <a class="button" href="https://github.com/interaapps/Petrel">GitHub</a>
            </div>
        </div>
        <br><br><br><br>

        <div ref="htmlCodeEditor" class="petrel-nlight" style="min-height: 200px"></div>
        <br><br>
        <div ref="firstCodeEditor" class="petrel-nlight" style="min-height: 500px"></div>

        <br><br>
        <p style="font-size: 20px">
            Learn more on our <router-link to="/docs/petrel">Docs Page for Petrel</router-link>
        </p>
        
    </div>
</template>
<script>
import { CodeEditor, JavaScriptAutoComplete } from 'petrel'

require('prismjs/components/prism-http')

import Prism from 'prismjs';
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-markup')

const HTML_EDITOR_CODE = `<!-- index.html -->
<head>
    <!-- with npm and webpack 
        require('petrel/css/dark.css')
        -->
    <link rel="stylesheet" href="https://js.intera.dev/petrel/1.0.4/css/dark.css">
</head>
<body>
    <div id="my-editor"></div>
</body>
`

const FIRST_EDITOR_CODE =
`// create-editor.js
import { CodeEditor, JavaScriptAutoComplete } from 'https://js.intera.dev/petrel/1.0.4/index.js'

const codeEditor = new CodeEditor(document.getElementById('my-editor'))

// Enables JavaScript autocompletion
codeEditor.setAutoCompleteHandler(new JavaScriptAutoComplete())

// Using highlight.js in this example
codeEditor.setHighlighter(code => hljs.highlight('javascript', code))
codeEditor.create()
`

export default {
    data: ()=>({
    }),
    mounted(){
        new CodeEditor(this.$refs.htmlCodeEditor, {
            closeKeys: {'<': '>'},
            placeholder: "Hello, I'm a placeholder ;)"
        })
            .setValue(HTML_EDITOR_CODE)
            .setHighlighter(c => Prism.highlight(c, Prism.languages.markup))
            .create()

        new CodeEditor(this.$refs.firstCodeEditor)
            .setValue(FIRST_EDITOR_CODE)
            .setAutoCompleteHandler(new JavaScriptAutoComplete())
            .setHighlighter(c => Prism.highlight(c, Prism.languages.javascript))
            .create()
    }
}
</script>