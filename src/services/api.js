const axios = require('axios');

const api = axios.create({
    baseURL: `${process.env.BOTICARIO_API_URL}`,
    headers: { 'Authorization': 'Bearer teste-123456789' }
});

module.exports = api;
