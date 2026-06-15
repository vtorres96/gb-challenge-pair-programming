const consolidationService = require('../services/consolidation');

module.exports = {
    index: async (req, res, next) => {
        try {
            const { sku } = req.query;

            if (!sku) {
                return res.status(400).json({
                    message: 'Query param sku is required'
                });
            }

            const response = await consolidationService.getConsolidationData(sku);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({
                'message': 'Error:' + error.message
            });
        }
    },
}
