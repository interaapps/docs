## CodeEditor
Creating a simple Code Editor is very simple. Create an instance of CodeEditor and set the first parameter to the element you want the editor to replace with.
<code-editor lang="javascript" value="const codeEditor = new CodeEditor(document.getElementById('my-editor'))
codeEditor.create()"></code-editor>

## Options
There are multiple options you can give the editor with the second parameter on the constructor


<br>
<code-editor lang="javascript" value="new CodeEditor(document.getElementById('my-editor'), {
    closeKeys: {
        '<', '>' // If < is being typed into the editor, the editor will autocomplete it with >
    },
    placeholder: 'Enter code in here',
    value: 'Hello World',
    readonly: false,
    tabShortcutsEnabled: true,
    tabSize: 4
})"></code-editor>
