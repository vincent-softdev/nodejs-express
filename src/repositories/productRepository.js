class ProductRepository {
    constructor() {
        // Dummy data
        this.products = [
            {
                id: 1,
                name: 'Product 1',
                price: 100
            },
            {
                id: 2,
                name: 'Product 2',
                price: 200
            }
        ]
    }

    // Get all products
    getAllProducts() {
        return this.products
    }
}

module.exports = new ProductRepository();
