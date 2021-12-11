
export default {
    name: "petrel",
    title: "Petrel",
    content: require("./start.md").default,
    children: [
        {
            name: "installation",
            title: "Installation",
            content: require("./installation.md").default
        },
        {
            name: "creating-code-editor",
            title: "Create a Code Editor",
            content: require("./creating-code-editor.md").default
        },
        {
            name: "highlighting",
            title: "Code-Highlighting",
            content: require("./highlight.md").default
        },
        {
            name: "autocompletion",
            title: "Auto-Completion",
            content: require("./autocompletion.md").default
        },
        {
            name: "styling",
            title: "Styling",
            content: require("./styling.md").default
        },
    ],
    github: 'interaapps/Petrel'
}