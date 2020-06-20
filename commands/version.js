const { version } = require("../package.json");


module.exports = () => {
    console.log(`weather cli version is: ${version}`);
}