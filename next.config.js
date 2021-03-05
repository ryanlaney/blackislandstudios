const withTM = require("next-transpile-modules")(["@material-ui/core"]);

module.exports = withTM({
    target: "serverless",
});
