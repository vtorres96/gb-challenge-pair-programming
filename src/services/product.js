const api = require('./api');

const getProduct = async (sku) => {
    try {
        const { data } = await api.get('/products', {
            params: { sku }
        });
        return data;
    } catch (error) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        throw new Error(`Product request failed${status ? ` with status ${status}` : ''} for sku ${sku}, message: ${message}`);
    }
}

module.exports = {
    getProduct
}
