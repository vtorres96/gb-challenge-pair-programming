const api = require('./api');

const getInventory = async (sku) => {
    try {
        const { data } = await api.get(`/inventories/${encodeURIComponent(sku)}`);
        return data;
    } catch (error) {
        const status = error.response?.status;
        const message = error.response?.message;
        throw new Error(`Inventory request failed${status ? ` with status ${status}` : ''} for sku ${sku}, message: ${message}`);
    }
}

module.exports = {
    getInventory
}
