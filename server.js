
/**
 * Simple server to serve builds
 */

const express = require("express"),
    path = require("path"),
    webpack = require("webpack"),
    app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, "./dist")));
    console.log("Buidling Bundle...");
webpack(require("./webpack.config"), () => {
    console.log("Finished build");
    app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
});