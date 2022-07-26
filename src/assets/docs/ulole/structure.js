export default {
    name: "ulole",
    title: "Ulole",
    content: require("./overview.md").default,
    children: [
        {
            name: "framework",
            title: "Framework",
            content: require("./framework/framework.md").default,
            children: [
                {
                    name: "install",
                    title: "Installation",
                    content: require("./framework/installation.md").default
                },
                {
                    name: "setup",
                    title: "Setup",
                    content: require("./framework/setup.md").default
                },
                {
                    name: "webapplication",
                    title: "WebApplication",
                    content: require("./framework/webapplication.md").default
                }
            ]
        },
        {
            name: "router",
            title: "Router",
            content: require("./router/router.md").default,
            children: [
                {
                    name: "start",
                    title: "Getting Started",
                    content: require("./router/start.md").default
                },
                {
                    name: "controller",
                    title: "Controller",
                    content: require("./router/controller.md").default
                },
                {
                    name: "json",
                    title: "Using JSON",
                    content: require("./router/json.md").default
                },
            ]
        },
        {
            name: "orm",
            title: "ORM",
            content: require("./orm/orm.md").default,
            children: [
                {
                    name: "models",
                    title: "Models",
                    content: require("./orm/models.md").default
                },
                {
                    name: "migration",
                    title: "Migration",
                    content: require("./orm/migration.md").default
                }
            ]
        }
    ],
    github: 'interaapps/ulole-framework'
}