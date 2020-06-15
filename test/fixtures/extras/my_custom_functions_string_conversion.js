var sass = require("node-sass");

module.exports = {
    "foo($a)": function (str) {
        str = str.getValue().replace(/['"]/g, "");
        return new sass.types.String('"' + str + str + '"');
    },
};
