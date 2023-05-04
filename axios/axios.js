const axios = require("axios");
const TARGET_SITE = require("../utils/constants");

const httpClient = axios.create({
  baseURL: TARGET_SITE,
});


module.exports = httpClient;
