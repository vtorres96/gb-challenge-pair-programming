require('../config/env');

const axios = require('axios');

const baseURL = process.env.BOTICARIO_API_URL;

if (!baseURL) {
    throw new Error('BOTICARIO_API_URL environment variable is required');
}

const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: { 'Authorization': 'Bearer teste-123456789' }
});

module.exports = api;
