const productService = require('../services/productService')

const productController = (req, res, next) => {
    try {
        // get all products from service
        const products = productService.getAllProducts()

        // Handle error
        if(!products || products.length === 0) {
            const error = new Error('No products found');
            error.status = 404;
            throw error;
        }

        // response data in json
        res.json({success: true, data: products})
    } catch (error) {
        next(error)
    }
}

module.exports = productController;
