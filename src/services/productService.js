const ProductRepository = require('../repositories/productRepository')

class ProductService {
    // Get all products
    getAllProducts() {
        return ProductRepository.getAllProducts()
    }
}

module.exports = new ProductService()
