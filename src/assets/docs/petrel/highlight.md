Code Highlighting does not come with Petrel itself. You need to find a library for it. We are going to show you two libraries with which you can do that, but you can use any other highlighting which gives you html.

## Highlight.js

<code-editor lang="javascript" value="// npm install highlight.js
import hljs from 'highlight.js';
const codeEditor = new CodeEditor(document.getElementById('my-editor'))
// Info: If you search for a style for highlight js you might want to import css/highlight/pastefy.css. Thats a color scheme which fits to our given editor-styles.
codeEditor.setHighlighter(code => hljs.highlight('javascript', code))
codeEditor.create()"></code-editor>

## Prism

<code-editor lang="javascript" value="// npm install prismjs
import Prism from 'prismjs';
const codeEditor = new CodeEditor(document.getElementById('my-editor'))
codeEditor.setHighlighter(code => hljs.highlight('javascript', code))
codeEditor.create()"></code-editor>