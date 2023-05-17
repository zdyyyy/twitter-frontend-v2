const CracoAlias = require("craco-alias");

//webpack settings
module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                baseUrl: "./src",
                source: "jsconfig",
            }

        }
    ]
}