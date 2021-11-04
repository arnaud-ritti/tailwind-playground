var fs = require("fs");

module.exports = {
    cert: fs.readFileSync(__dirname + "/conf/server.cert"),
    key: fs.readFileSync(__dirname + "/conf/server.key"),
    passphrase: "12345"
};
