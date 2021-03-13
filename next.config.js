const withTM = require("next-transpile-modules")(["@material-ui/core", "@material-ui/icons"]);

module.exports = withTM({
    target: "serverless",
});
