export default {
    name: "punyshort",
    title: "Punyshort",
    content: require("./overview.md").default,
    children: [
        {
            name: "spec",
            title: "Api V2",
            type: "spec",
            content: require("./api_spec.js").default
        }
    ],
    github: 'interaapps/punyshort'
}