<template>
    <div class="contents" id="doc">
        <div id="docs-sidenav">
            <DocsNav id="docs-sidenav-contents" />
            <div v-for="(entry, i) of structure.children" :key="i">
                <div v-if="($route.path).startsWith('/docs/'+entry.name)">
                    <a v-if="entry.github" :href="'https://github.com/'+entry.github" class="icon-button">
                        <svg data-v-af771c48="" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs data-v-af771c48=""></defs><title data-v-af771c48="">github</title><g data-v-af771c48="" id="Layer_2" data-name="Layer 2"><g data-v-af771c48="" id="github"><path data-v-af771c48="" d="M16.24,22a1,1,0,0,1-1-1V18.4a2.15,2.15,0,0,0-.54-1.66,1,1,0,0,1,.61-1.67C17.75,14.78,20,14,20,9.77a4,4,0,0,0-.67-2.22,2.75,2.75,0,0,1-.41-2.06,3.71,3.71,0,0,0,0-1.41,7.65,7.65,0,0,0-2.09,1.09,1,1,0,0,1-.84.15,10.15,10.15,0,0,0-5.52,0,1,1,0,0,1-.84-.15A7.4,7.4,0,0,0,7.52,4.08a3.52,3.52,0,0,0,0,1.41,2.84,2.84,0,0,1-.43,2.08A4.07,4.07,0,0,0,6.42,9.8c0,3.89,1.88,4.93,4.7,5.29a1,1,0,0,1,.82.66,1,1,0,0,1-.21,1,2.06,2.06,0,0,0-.55,1.56V21a1,1,0,0,1-2,0v-.57a6,6,0,0,1-5.27-2.09,3.9,3.9,0,0,0-1.16-.88,1,1,0,1,1,.5-1.94,4.93,4.93,0,0,1,2,1.36c1,1,2,1.88,3.9,1.52h0a3.89,3.89,0,0,1,.23-1.58c-2.06-.52-5-2-5-7a6,6,0,0,1,1-3.33.85.85,0,0,0,.13-.62,5.69,5.69,0,0,1,.33-3.21,1,1,0,0,1,.63-.57c.34-.1,1.56-.3,3.87,1.2a12.16,12.16,0,0,1,5.69,0c2.31-1.5,3.53-1.31,3.86-1.2a1,1,0,0,1,.63.57,5.71,5.71,0,0,1,.33,3.22.75.75,0,0,0,.11.57,6,6,0,0,1,1,3.34c0,5.07-2.92,6.54-5,7a4.28,4.28,0,0,1,.22,1.67V21A1,1,0,0,1,16.24,22Z" class="cls-2"></path></g></g></svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="doc-body">
            <h1 id="doc-title">{{$route.meta.title}}</h1>
            <vue-markdown ref="content" id="markdown-contents" @rendered="onRender" :source="$route.meta.content" />
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs';
import { Cajax } from 'cajaxjs';
import { CodeEditor, JavaScriptAutoComplete, PHPAutoComplete } from 'petrel'

require('prismjs/components/prism-markup-templating')
require('prismjs/components/prism-java')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-php')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-python')
require('prismjs/components/prism-markup')
require('prismjs/components/prism-css')


import structure from "../assets/docs/structure.js";
import DocsNav from '../components/DocsNav'
export default {
    data: ()=>({
        structure,
    }),
    components: {
        VueMarkdown,
        DocsNav
    },
    methods: {
        onRender(){
            this.$nextTick(() => {
                Prism.highlightAll();
                this.$refs.content.$el.getElementsByTagName("a").forEach(e => {
                    if (e.hostname == window.location.hostname) {
                        e.addEventListener("click", event => {
                            this.$router.push(e.pathname)
                            event.preventDefault()
                            return false
                        });
                    }
                })

                this.$refs.content.$el.getElementsByTagName("pre").forEach(e => {
                    const codeElement = e.getElementsByTagName("code")[0]
                    const doc = document.createElement("div")
                    let lang;
                    e.classList.forEach(clazz => {
                        if (clazz.includes("language-"))
                            lang = clazz.replace("language-", "").toLowerCase()
                    })
                    if (lang) {
                        lang = lang.replaceAll("javascript", "js").toUpperCase()
                        doc.innerHTML = lang
                        doc.classList.add("language-identifier")
                        e.insertBefore(doc, codeElement)
                        
                        e.onscroll = ()=>{
                            if (e.scrollLeft < 20)
                                doc.style.opacity = '1'
                            else
                                doc.style.opacity = '0'
                        }
                    }
                })

                this.$refs.content.$el.getElementsByTagName("code-editor").forEach(async e => {
                    e.style.display = "block"
                    let value = "";
                    if (e.hasAttribute('value')) {
                        value = e.getAttribute('value')
                    } else if (e.hasAttribute('paste')) {
                        value = await (new Cajax('https://pastefy.ga/api/v2')).get(`/paste/${e.getAttribute('paste')}`).then(res=>res.json()).then(res=>res.content)
                    }
                    const codeEditor = new CodeEditor(e)
                        .setValue(value)

                    if (e.hasAttribute('lang'))
                        codeEditor.setHighlighter(c => Prism.highlight(c, Prism.languages[e.getAttribute('lang')]))

                    if (e.getAttribute('lang') == 'javascript'){
                        codeEditor.setAutoCompleteHandler(new JavaScriptAutoComplete())
                    } else if (e.getAttribute('lang') == 'php'){
                        codeEditor.setAutoCompleteHandler(new PHPAutoComplete())
                    }
                    if (e.hasAttribute('readonly'))
                        codeEditor.readonly = true

                    codeEditor.create()
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>

#docs-sidenav {
    width: 300px;
    overflow: auto;
    display: inline-block;
    vertical-align: top;

    #docs-sidenav-contents {
        padding: 13px 0px;
        border: 2px solid #00000005;
        border-radius: 12px;
        background: #f3f3f3aa;
        backdrop-filter: blur(8px);
        margin-bottom: 16px;
    }
    .icon-button {
        color: #545454;
        svg {
            display: block;
            width:  32px;
            height: 32px;
        }
    }
}

#doc-body {
    vertical-align: top;
    display: inline-block;

    width: calc(100% - 320px);
    margin-left: 20px; 
    padding: 30px;
    overflow: hidden;
    word-break: break-word;

    border: #EEE solid 2px;
    border-radius: 12px;
}
#doc-title {
    font-size: 44px;
    font-weight: 600;
    color: #434343;
    margin-bottom: 25px;
}

@media screen and (max-width: 720px){
    #doc-body {
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px; 
    }
}
</style>
