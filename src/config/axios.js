require('dotenv').config()

const axios = require("axios");
axios.defaults.baseURL = process.env.URLAPI;

module.exports = axios;
