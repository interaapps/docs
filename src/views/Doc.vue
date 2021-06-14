<template>
    <div id="doc">
        <div id="doc-body">
            <h1 id="doc-title">{{$route.meta.title}}</h1>
            <vue-markdown ref="content" id="markdown-contents" @rendered="onRender" :source="$route.meta.content" />
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs';
require('prismjs/components/prism-markup-templating')
require('prismjs/components/prism-java')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-php')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-python')


import structure from "../assets/docs/structure.js";

export default {
    data: ()=>({
        structure,
    }),
    components: {
        VueMarkdown
    },
    methods: {
        onRender(){
            this.$nextTick(() => {
                Prism.highlightAll();
                this.$refs.content.$el.getElementsByTagName("a").forEach(e => {
                    if (e.hostname == window.location.hostname) {
                        e.addEventListener("click", event => {
                            console.log("Hello world")
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
                        console.log(codeElement.textContent);
                        e.onscroll = ()=>{
                            if (e.scrollLeft < 20)
                                doc.style.opacity = '1'
                            else
                                doc.style.opacity = '0'
                        }
                    }
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>

#doc-body {
    width: 100%; 
    padding-left: 15%; 
    padding-right: 15%; 
    padding-top: 20px; 
    padding-bottom: 50px;
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
