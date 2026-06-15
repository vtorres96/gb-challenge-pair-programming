const productService = require('./product');
const priceService = require('./price');
const inventoryService = require('./inventory');

const getConsolidationData = async (sku) => {
    const [product, price, stock] = await Promise.all([
        productService.getProduct(sku),
        priceService.getPrices(sku),
        inventoryService.getInventory(sku)
    ]);
    const available = stock.quantity - stock.committed;

    const discountPercentage = Math.round(
        (1 - price.price / price.maxPrice) * 100
    );

//     retorno esperado 
// {
//     "sku": "ABC123",
//     "name": "Shampoo Cabelo Liso 300ml",
//     "slugName": "shampoo-cabelo-liso",
//     "description": "Shampoo desenvolvido especialmente para cabelos lisos",
//     "images": {
//         "thumbnail": "https://cdn.example.com/image1.jpg",
//         "large": "https://cdn.example.com/image2.jpg"
//     },
//     "inventory": {
//         "available": 125
//     },
//     "priceSpecification": {
//         "maxPrice": 32.90,
//         "price": 29.61,
//         "discountPercentage": 10
//     }
// }
    return {
        ...product,

        inventory: {
            ...stock,
            available
        },

        priceSpecification: {
            ...price,
            discountPercentage
        }
    };
}

module.exports = {
    getConsolidationData
}
