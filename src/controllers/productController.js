const productService = require('../services/productService')

const productController = (req, res) => {
    try {
        // get all products from service
        const products = productService.getAllProducts()

        // response data in json
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = productController;
