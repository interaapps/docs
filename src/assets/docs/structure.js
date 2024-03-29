export default {
    name: "docs",
    title: "Docs",
    content: require("./index.md").default,
    children: [
        {
            name: "accounts",
            title: "Accounts",
            content: require("./interaapps/accounts/getting-started.md").default,
            children: [
                {
                    name: "getting-user-information",
                    title: "Getting User Information",
                    content: require("./interaapps/accounts/getting_user_information.md").default
                },
                {
                    name: "writing-user-information",
                    title: "Writing User Information",
                    content: require("./interaapps/accounts/writing_user_information.md").default
                },
                {
                    name: "permissions",
                    title: "Permissions",
                    content: require("./interaapps/accounts/permissions.md").default
                },
                {
                    name: "header",
                    title: "Authorization",
                    content: require("./interaapps/accounts/header.md").default
                },
                {
                    name: "oauth2",
                    title: "OAuth2 (Login with IA)",
                    content: require("./interaapps/accounts/oauth2/oauth2.md").default,
                    children: [
                        {
                            name: "getting-started",
                            title: "OAuth2",
                            content: require("./interaapps/accounts/oauth2/oauth2.md").default
                        },
                        {
                            name: "using-java-library",
                            title: "Using Java-Library",
                            content: require("./interaapps/accounts/oauth2/using-java-library.md").default
                        },
                    ]
                },
                {
                    name: "app-access",
                    title: "IA External Access",
                    content: require("./interaapps/accounts/app_access.md").default
                },
            ]
        },
        {
            name: "pastefy",
            title: "Pastefy",
            content: require("./pastefy/overview.md").default,
            children: [
                {
                    name: "spec",
                    title: "Api V2",
                    type: "spec",
                    content: require("./pastefy/api_spec.js").default
                }
            ],
            github: 'interaapps/pastefy'
        },
        require("./ulole/structure").default,
        require("./punyshort/structure").default,
        {
            name: "cajax",
            title: "Cajax",
            content: require("./cajax/installation.md").default,
            children: [
                {
                    name: "basics",
                    title: "Getting Started",
                    content: require("./cajax/basics.md").default
                }
            ],
            github: 'interaapps/cajax'
        },
        {
            name: "ping",
            title: "Ping",
            content: require("./ping/basics.md").default,
            children: [
            ],
            github: 'interaapps/ping.intera.dev'
        },
        require('./petrel/structure.js').default,
        {
            name: "jdom",
            title: "Jdom",
            content: require("./jdom/basics.md").default,
            children: [
            ]
        }
    ]
}