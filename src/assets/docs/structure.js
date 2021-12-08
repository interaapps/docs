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
            ]
        },
        {
            name: "pastefy",
            title: "Pastefy",
            content: require("./pastefy/overview.md").default,
            children: [
                {
                    name: "api-v2",
                    title: "Api V2",
                    content: require("./pastefy/apiv2.md").default
                }
            ],
            github: 'interaapps/pastefy'
        },
        {
            name: "punyshort",
            title: "Punyshort",
            content: require("./punyshort/overview.md").default,
            children: [
                {
                    name: "short",
                    title: "Shorten a link",
                    content: require("./punyshort/short.md").default
                },
                {
                    name: "getinformation",
                    title: "Get Link Information",
                    content: require("./punyshort/getinformation.md").default
                },
                {
                    name: "error",
                    title: "Error-Codes",
                    content: require("./punyshort/error.md").default
                }
            ],
            github: 'interaapps/punyshort'
        },
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
                /*{
                    name: "basics",
                    title: "Getting Started",
                    content: require("./cajax/basics.md").default
                }*/
            ],
            github: 'interaapps/ping.intera.dev'
        },
        {
            name: "jdom",
            title: "Jdom",
            content: require("./jdom/basics.md").default,
            children: [
            ]
        }
    ]
}