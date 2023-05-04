const httpClient = require("./axios");

const getData = (path) => httpClient.get(`${path}`);

module.exports = getData;
