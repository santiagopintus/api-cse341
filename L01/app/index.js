const app = require("express")();

// mount the router on the app
app.use("/", require("../routes"));

module.exports = app;
