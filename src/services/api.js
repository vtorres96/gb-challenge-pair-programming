const axios = require('axios');

const api = axios.create({
    baseURL: 'https://gb-mock-api.hml.ecomm.grupoboticario.digital',
    headers: { 'Authorization': 'Bearer teste-123456789' }
});

module.exports = api;
