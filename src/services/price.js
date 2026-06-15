const api = require('./api');

const getPrices = async (sku) => {
    try {
        const { data } = await api.get(`/prices/${encodeURIComponent(sku)}`);
        return data;
    } catch (error) {
        const status = error.response?.status;
        const message = error.response?.message;
        throw new Error(`Price request failed${status ? ` with status ${status}` : ''} for sku ${sku}, message: ${message}`);
    }
}

module.exports = {
    getPrices
}
