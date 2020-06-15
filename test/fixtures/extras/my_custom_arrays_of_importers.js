var sass = require("node-sass");

module.exports = [
    function () {
        return sass.NULL;
    },
    function () {
        return {
            contents: "div {color: yellow;}",
        };
    },
];
